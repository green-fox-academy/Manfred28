# Write a function that takes a filename as string,
# then returns the number of lines the file contains.
# It should return zero if it can't open the file, and
# should not raise any error.

def count_lines(file_name):
    try:
        counter = 0
        with open(file_name, "r") as file:
            for lines in file:
                counter += 1
        return counter
    except FileNotFoundError:
        return "File not found"

file_name = input("Enter the name of a file: ")
print(count_lines(file_name))