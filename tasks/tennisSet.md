

In tennis, set is finished when one of the players wins 6 games and the other one less than 5 or when one of the players wins 7 games (in that case, the second one has less wins, no matter how many).

Determine if a given score is possible for an ended tennis set.

Example

    for score1 = 3, score2 = 6 output should be true,
    for score1 = 8, score2 = 5 or score1 = 6, score2 = 5 output should be false

    [input] integer score1
        number of games won by the 1st player, non-negative integer

    [input] integer score2
        number of games won by the 2nd player, non-negative integer

    [output] boolean
        true if score1 : score2 represents a possible score for an ended set, false otherwise
