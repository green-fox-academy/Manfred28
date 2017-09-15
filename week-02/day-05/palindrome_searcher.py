''' Exercise

Create a function named search palindrome following your current language's style guide. It should take a string, search for palindromes that at least 3 characters long and return a list with the found palindromes.
"dog goat dad duck doodle never"	["og go", "g g", " dad ", "dad", "d d", "dood", "eve"] '''


def palindrome_searcher(input_string):
    input_length = len(input_string)
    palindromes = []
    for i in range(input_length - 3):
        for j in range(input_length - 1, i + 2, -1):
            if input_string[i:j] == input_string[j-1:i-1:-1]:
                palindromes.append(input_string[i:j])
    return palindromes


print(palindrome_searcher("dog goat dad duck doodle never"))
