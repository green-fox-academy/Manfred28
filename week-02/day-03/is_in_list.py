# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts list_of_numbers as an input
# it should return "True" if it contains all, otherwise "False"

list_of_numbers = [2, 4, 6, 8, 10, 12, 14, 16]

def contains_magicnumbers(list_of_numbers):
    magic_numbers = [4, 8, 12, 16]
    counter = 0
    for magic_number in magic_numbers:
        for number in list_of_numbers:
            if number == magic_number:
                counter += 1
    return counter == len(magic_numbers)

print(contains_magicnumbers(list_of_numbers))