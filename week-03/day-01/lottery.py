# Create a method that find the 5 most common lottery numbers otos.csv

from collections import defaultdict
from collections import Counter

def five_most_frequent():
    print(filter_most_common_numbers(get_drawn_numbers("otos.csv")))


def get_drawn_numbers(file_name):
    with open(file_name, "r") as file:
        drawn_numbers = defaultdict(int)
        for line in file:
            number_combination = line.strip().split("Ft;")[-1].split(";")
            for number in number_combination:
                drawn_numbers[number] += 1
        return drawn_numbers


def filter_most_common_numbers(most_common_numbers):
    most_common_numbers = Counter(most_common_numbers)
    most_common_numbers = most_common_numbers.most_common(5)
    return most_common_numbers


five_most_frequent()
