# Restore test runner — Plan 02-04 Task 2
# Generated 2026-05-16
# Usage: powershell -NoProfile -ExecutionPolicy Bypass -File _restore-test-runner.ps1

$ErrorActionPreference = 'Continue'
$target = 'D:\TestRestore\colisi-2026-05-11'
$origRepo = 'D:\Projects\game'
$lfsPath = '.planning/phases/02-infrastructure-repo-setup/verification/lfs-test.png'

Write-Host '================================================================'
Write-Host 'RESTORE TEST — Plan 02-04 Task 2'
Write-Host "Target path: $target"
Write-Host "Test started: $(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')"
Write-Host '================================================================'
Write-Host ''

# ============================================================
# STEP 1: Clone + LFS install + LFS pull
# ============================================================
Write-Host '=== STEP 1a: git clone ==='
$sw = [System.Diagnostics.Stopwatch]::StartNew()
New-Item -ItemType Directory -Force -Path (Split-Path $target -Parent) | Out-Null
git clone https://github.com/danhicks853/colisi.git $target 2>&1
$cloneElapsed = $sw.Elapsed.TotalSeconds
Write-Host ""
Write-Host "Clone elapsed: $cloneElapsed seconds"
Write-Host ''

Write-Host '=== STEP 1b: git lfs install (in restored repo) ==='
Set-Location $target
$sw2 = [System.Diagnostics.Stopwatch]::StartNew()
git lfs install 2>&1
Write-Host "LFS install elapsed: $($sw2.Elapsed.TotalSeconds) seconds"
Write-Host ''

Write-Host '=== STEP 1c: git lfs pull ==='
$sw3 = [System.Diagnostics.Stopwatch]::StartNew()
git lfs pull 2>&1
$lfsElapsed = $sw3.Elapsed.TotalSeconds
Write-Host ""
Write-Host "LFS pull elapsed: $lfsElapsed seconds"
Write-Host ''

# ============================================================
# STEP 2: Integrity Check 1 — git status + git log -1
# ============================================================
Write-Host '================================================================'
Write-Host '=== STEP 2: CHECK 1 — git status + git log -1 ==='
Write-Host '================================================================'
Write-Host ''
Write-Host '--- git status ---'
git status 2>&1
Write-Host ''
Write-Host '--- git log -1 ---'
git log -1 2>&1
Write-Host ''

# ============================================================
# STEP 3: Integrity Check 2 — lfs-test.png size
# ============================================================
Write-Host '================================================================'
Write-Host '=== STEP 3: CHECK 2 — lfs-test.png size ==='
Write-Host '================================================================'
$lfsFile = Get-Item $lfsPath -ErrorAction Stop
$sizeBytes = $lfsFile.Length
Write-Host "lfs-test.png size: $sizeBytes bytes"
if ($sizeBytes -gt 200) {
    Write-Host 'CHECK 2: PASS (size > 200 bytes — real PNG bytes)' -ForegroundColor Green
} else {
    Write-Host 'CHECK 2: FAIL (size <= 200 bytes — likely LFS pointer text)' -ForegroundColor Red
}
Write-Host ''

# ============================================================
# STEP 4: Integrity Check 3 — PNG signature
# ============================================================
Write-Host '================================================================'
Write-Host '=== STEP 4: CHECK 3 — PNG signature ==='
Write-Host '================================================================'
$bytes = [System.IO.File]::ReadAllBytes($lfsPath)[0..7]
$hex = ($bytes | ForEach-Object { '{0:X2}' -f $_ }) -join ' '
Write-Host "First 8 bytes: $hex"
$expected = '89 50 4E 47 0D 0A 1A 0A'
if ($hex -eq $expected) {
    Write-Host "CHECK 3: PASS (matches PNG signature $expected)" -ForegroundColor Green
} elseif ($hex.StartsWith('76 65 72 73')) {
    Write-Host 'CHECK 3: FAIL (starts with 76 65 72 73 = "vers" of "version" pointer text)' -ForegroundColor Red
} else {
    Write-Host "CHECK 3: FAIL (unexpected bytes; expected $expected)" -ForegroundColor Red
}
Write-Host ''

# ============================================================
# STEP 5: Optional Check 4 — SHA256 bit-identical comparison
# ============================================================
Write-Host '================================================================'
Write-Host '=== STEP 5: CHECK 4 — SHA256 bit-identical recovery ==='
Write-Host '================================================================'
$origFile = Join-Path $origRepo $lfsPath
$restoredFile = Join-Path $target $lfsPath
$origHash = (Get-FileHash $origFile -Algorithm SHA256).Hash
$restoredHash = (Get-FileHash $restoredFile -Algorithm SHA256).Hash
Write-Host "Original SHA256:  $origHash"
Write-Host "Restored SHA256:  $restoredHash"
if ($origHash -eq $restoredHash) {
    Write-Host 'CHECK 4: PASS (bit-identical recovery)' -ForegroundColor Green
} else {
    Write-Host 'CHECK 4: FAIL (hashes differ)' -ForegroundColor Red
}
Write-Host ''

Write-Host '================================================================'
Write-Host 'RESTORE TEST COMPLETE'
Write-Host "Test finished: $(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')"
Write-Host "Total clone time: $cloneElapsed s; total LFS pull time: $lfsElapsed s"
Write-Host '================================================================'
