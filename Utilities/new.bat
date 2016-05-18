@echo off
REM this batch help me create files for a new task or challenge
REM echo Script started
touch %1.js %1.rb %1.java %1.py %1.cs %1.cpp %1.md
REM If the description file is already created add '# Description' in its beginning
echo # Description > newfile.txt
type %1.md >> newfile.txt
type newFile.txt > %1.md
del newFile.txt
REM this adds a newline after # Description
echo. >> %1.md
atom %1.md && atom %1.js
REM echo the files %1.js %1.md were created succesfully
