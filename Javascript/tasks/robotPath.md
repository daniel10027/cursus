Consider a robot standing on a 2-dimensional grid at point (0, 0). It follows a sequence of instructions.

Each instruction is processed as follows:

    'L' decreases the first coordinate by one,
    'R' increases the first coordinate by one,
    'U' increases the second coordinate by one,
    'D' decreases the second coordinate by one.

But the robot isn't allowed to leave a pre-defined square (with sides parallel to the axes) centered at (0,0). If the execution of the current instruction would lead to the robot leaving the square, that instruction is just ignored.

Given a sequence of instructions and a restricting square, output an array of two integers representing the final position of the robot after executing all the instructions.

##Example

For instructions = "LLLLUUUUDR", bound = 2, the output should be [-1, 1] since the restricting square is (2,2),(2,-2),(-2,-2),(-2,2)

    [input] string instructions
        A non-empty string consisting of characters L,R,U,D.

    [input] integer bound
        A positive integer equal to the half-length of the restricting square's side.

    [output] array.integer
