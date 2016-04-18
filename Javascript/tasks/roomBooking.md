# Description
Some hotel is introducing a new system for choosing room for arriving tourists. The hotel employee takes visitor's last name and obtains a room number N0 using some function F(·) of the name.

If the room N0 is free then it is chosen. If it is already occupied, an unoccupied room N1 is chosen for that visitor such that N0 < N1 and N1 is the smallest possible number. If there are no more free rooms with number greater than N0, a free room with the smallest number is chosen. F(·) is defined as follows:

F(s) = (s[0] + s[1] + s[2] + ... + s[length(s) - 1]) mod M.

Here M is equal to the total number of rooms and s[i] is a code of the ith character of s.

For a given list of arriving and leaving visitors determine the order in which the remaining visitors (those who haven't left the hotel) will live.

It is guaranteed that the hotel always has free rooms. All visitors have different names and don't leave the hotel before entering. Rooms have numbers from 0 to M - 1.

Example

For the list with unusual names ["+Ac", "+Bb", "+Ca", "-Bb", "+Ad"] and 200 rooms in total, the answer will be ["Ac", "Ad", "Ca"].

[input] integer M

[input] array.string operations

Each operation starts with either + or - - denoting whether a tourist is entering or leaving the hotel; the following characters store the tourist's name. [output] array.string
