REM this batch help me creat files for a new task or challenge
@echo off
REM echo Script started
touch %1.js %1.md
echo # Description > %1.md
echo. >> %1.md
atom %1.md && atom %1.js
REM echo the files %1.js %1.md were created succesfully
