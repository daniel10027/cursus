N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

Example

switchLights([1, 1, 1, 1, 1]) = [0, 1, 0, 1, 0]

[input] array.integer a

initial situation - array of zeros and ones of length N, 1 means that the corresponding candle is lit
[output] array.integer

situation after applying the algorithm - array in the same format as input with the same length
