@echo off
REM echo Script started
touch %1.js %1.md
echo the files %1.js %1.md were created succesfully
atom %1.md %1.js
