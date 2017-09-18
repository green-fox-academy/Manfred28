
# Create a function that takes 3 parameters: a path, a word and a number,
# than it should write to a file.
# The path parameter should be a string, that describes the location of the file.
# The word parameter should be a string, that will be written to the file as lines
# The number paramter should describe how many lines the file should have.
# So if the word is "apple" and the number is 5, than it should write 5 lines
# to the file and each line should be "apple"
# The function should not raise any error if it could not write the file.

def write_multiple_line(path, word, repeat):
    try:
        with open(path, "w") as file:
            for i in range(repeat):
                file.write(word + "\n")
    except:
        return 0

write_multiple_line("C:\GreenFox\Manfred28\week-03\day-01\\apple.txt", "apple", 5)