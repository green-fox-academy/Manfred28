''' Find the part of int

Create a function that takes a number and a list of numbers as a parameter
Returns the indeces of the numbers in the list where the first number is part of
Returns an empty list if the number is not part any of the numbers in the list
Example



input: [1, 11, 34, 52, 61], 1
output: [0, 1, 4] '''

import math

input_numbers = [1, 11, 34, 52, 61]
output = []

def part_of_int(input_numbers, search_number):
    for i in range(len(input_numbers)):
        place_numbers = get_number_of_places(input_numbers[i])
        if number_includes_digit(input_numbers[i], place_numbers, search_number):
            output.append(i)

def get_number_of_places(number):
    if number > 0:
        place_numbers = int(math.log10(number))+1
    elif number == 0:
        place_numbers = 1
    return place_numbers


def number_includes_digit(number, place_numbers, search_number):
    for place in range(1, place_numbers * 10, 10):
        if search_number == get_value_at_place_of_value(number, place):
            return True
    return False


def get_value_at_place_of_value(number, place):
    return int((number/place) % 10);


part_of_int(input_numbers, 1)
print(output)



