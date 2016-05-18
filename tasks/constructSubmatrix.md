A submatrix of a matrix is obtained by deleting any collection of rows and/or columns.

Given a matrix, find its submatrix obtained by deleting the specified rows and columns.

Example

for

matrix = [[1, 0, 0, 2],
          [0, 5, 0, 1],
          [0, 0, 3, 5]],
rows = [1],
columns = [0, 2]

output should be

[[0, 2],
 [0, 5]]

    [input] array.array.integer matrix
        2-dimensional array of integers

    [input] array.integer rowsToDelete
        array of indices (0-based) of rows to be deleted

    [input] array.integer columnsToDelete
        array of indices (0-based) of columns to be deleted

    [output] array.array.integer
