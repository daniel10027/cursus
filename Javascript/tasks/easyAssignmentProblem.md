# Description

You're the CEO of a small top company, so small that the company only has 2 employees and 2 types of work: actually manufacturing the toys (task number 1), and painting them (task number 2). You're given a 2 × 2 matrix, skills, such that skills[i][j] shows the skill level of ith employee in jth task. Each employees's work quality depends on their skill: the greater the skill, the higher quality work they will output.

Your goal is to assign the tasks in such a way that all of the work will be completed with the best possible quality. It's guaranteed that there is always only one answer.

Example

For skills = [[1, 3], [2, 3]], the output should be easyAssignmentProblem(skills) = [2, 1]; For skills = [[3, 1], [2, 1]], the output should be easyAssignmentProblem(skills) = [1, 2]. [input] array.array.integer skills

A matrix with non-negative integers - how many times each employee has done each task.

[output] array.integer

The best task assignment (1-based).
