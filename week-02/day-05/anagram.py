''' What the hell is an anagram?

An anagram is direct word switch or word play, 
the result of rearranging the letters of a word
 or phrase to produce a new word or phrase, using
  all the original letters exactly once; for example,
   the word anagram can be rearranged into nag-a-ram.


Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not. '''

def anagram_checker(string1, string2):
    string1 = remove_whitespace(string1)
    string2 = remove_whitespace(string2)
    if not is_length_equal(string1, string2):
        return False
    for i in range(len(string1)):
        letter_index = string2.find(string1[i])
        if letter_index >= 0:
            string2 = string2[:letter_index] + string2[letter_index + 1:]
        else: 
            return False
    return True

def is_length_equal(elem1, elem2):
    return len(elem1) == len(elem2)


def remove_whitespace(string):
    return "".join(string.split())


print(anagram_checker("asd     d", "dasd"))
