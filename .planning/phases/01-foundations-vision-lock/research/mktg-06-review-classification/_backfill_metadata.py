"""
Backfill Review ID / Date / Helpful / Playtime columns into classified.md files
that are missing them. Parses metadata from corresponding *-extracted.txt files.
"""
import re
from pathlib import Path

BASE = Path(__file__).parent

# Files needing backfill (per `head | grep Playtime` audit)
TARGETS = [
    "1055540-a-short-hike",
    "1084600-my-time-sandrock",
    "1401590-dreamlight-valley",
    "1432860-sun-haven",
    "2707930-palia",
    "666140-my-time-portia",
    "824000-hokko-life",
    "914800-coffee-talk",
]

def parse_extracted(extracted_path):
    """Return dict R# -> (id, date, helpful, playtime)."""
    text = extracted_path.read_text(encoding="utf-8")
    pattern = re.compile(
        r"## (R\d+)\s*\n"
        r"\*\*ID:\*\*\s*(\d+)\s*\|\s*"
        r"\*\*Date:\*\*\s*([0-9-]+)\s*\|\s*"
        r"\*\*Helpful:\*\*\s*(\d+)\s*\|\s*"
        r"\*\*Playtime:\*\*\s*([0-9.]+h)"
    )
    result = {}
    for m in pattern.finditer(text):
        rnum, rid, rdate, helpful, playtime = m.groups()
        result[rnum] = (rid, rdate, helpful, playtime)
    return result

def backfill(slug):
    classified = BASE / f"{slug}-classified.md"
    extracted = BASE / f"{slug}-extracted.txt"
    if not classified.exists() or not extracted.exists():
        print(f"SKIP {slug}: missing file")
        return
    meta = parse_extracted(extracted)
    if not meta:
        print(f"SKIP {slug}: no metadata parsed")
        return

    lines = classified.read_text(encoding="utf-8").splitlines(keepends=True)
    out = []
    in_table = False
    rewrote_header = False
    rewrote_sep = False
    rewrote_count = 0
    for line in lines:
        stripped = line.rstrip("\n")
        # Header detection: "| R# | Categories | Quote snippet | Verification |"
        if not rewrote_header and re.match(r"^\|\s*R#\s*\|\s*Categories\s*\|", stripped):
            out.append("| R# | Review ID | Date | Helpful | Playtime | Categories | Quote snippet | Verification |\n")
            rewrote_header = True
            in_table = True
            continue
        # Separator row
        if in_table and not rewrote_sep and re.match(r"^\|[-\s|]+\|\s*$", stripped):
            out.append("|---|---|---|---|---|---|---|---|\n")
            rewrote_sep = True
            continue
        # Body row: "| R<N> | ..."
        if in_table and rewrote_sep:
            m = re.match(r"^\|\s*(R\d+)\s*\|(.*)$", stripped)
            if m:
                rnum, rest = m.group(1), m.group(2)
                if rnum in meta:
                    rid, rdate, helpful, playtime = meta[rnum]
                    out.append(f"| {rnum} | {rid} | {rdate} | {helpful} | {playtime} |{rest}\n")
                    rewrote_count += 1
                    continue
                else:
                    out.append(line)
                    continue
            elif stripped.startswith("|"):
                # Still in table but not a recognized row (shouldn't happen)
                out.append(line)
                continue
            else:
                # Left the table
                in_table = False
                out.append(line)
                continue
        out.append(line)

    classified.write_text("".join(out), encoding="utf-8")
    print(f"OK {slug}: {rewrote_count} rows backfilled")

if __name__ == "__main__":
    for slug in TARGETS:
        backfill(slug)
