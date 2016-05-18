# Description
It is a common tradition to play Hangman game during classes. Too bad it's difficult to do so if you and your friend sit far from each other. You, however, came up with a great idea.

First, you write down a word. After that your friend writes down distinct letters and passes the list with them to you. Now you look at the letters in his list one by one. If the current letter is present in your word, you erase all occurrences of this letter from it, otherwise you call it a miss. If you erase the entire word before 6 misses, then your friend wins. If you count 6 misses or run out of letters before the word is erased, you win.

Given the word you made and your friend's letters, return true if he wins or false otherwise.

## Example
For word = 'hello' and letters = 'aenmrolhtg' the answer should be true. The stages of the game are:

```
'a' - 1st miss;
'e' - correct letter (_ e _ _ _);
'n' - 2nd miss;
'm' - 3rd miss;
'r' - 4th miss;
'o' - correct letter (_ e _ _ o);
'l' - correct letter (_ e l l o);
'h' - correct letter (h e l l o);
Other letters don't matter since the word is guessed already.
```

- [input] string word

  A non-empty word composed of lowercase Latin letters.

- [input] string letters

  A string of distinct lowercase Latin letters.

- [output] boolean

  true if the word is guessed, false otherwise.
