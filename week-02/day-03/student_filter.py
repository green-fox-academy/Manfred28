students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies

# create a function that takes a list of students and prints: 
#  - how many candies they have on average

def candy_millionaire(students):
    for student in students:
        if student["candies"] > 4:
            print(student["name"])

def candy_average(students):
    candy_sum = 0
    for student in students:
        candy_sum += student["candies"]
    print(candy_sum / len(students))

candy_millionaire(students)
candy_average(students)