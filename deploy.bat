@echo off
if "%~1"=="" (
    echo Error: Please provide a commit message.
    echo Example: .\deploy.bat "fixed email address"
    exit /b 1
)

echo [1/3] Staging changes...
git add .

echo [2/3] Committing changes...
git commit -m "%~1"

echo [3/3] Pushing to GitHub...
git push origin main

echo Done! Changes pushed. Please wait 1-2 minutes for GitHub Pages to rebuild.
