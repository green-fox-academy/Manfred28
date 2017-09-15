''' Exercise

Write a function to solve Josephus Problem. The program should ask for a number, this number represents how many people are in the "game". The return value should be the number of the "winning" seat.

Examples

number of people	number of the winning seat
1	1
2	1
3	3
7	7
12	9
41	19 '''


def josephus(number):
    array_of_peeps = []
    for i in range(number):
        array_of_peeps.append(i + 1)
    murder_peeps(array_of_peeps)


def murder_peeps(array_of_peeps):
    number_of_peeps = len(array_of_peeps)
    surviving_peeps = []
    if number_of_peeps == 1:
        print(array_of_peeps[0])
        return
    for i in range(0, number_of_peeps, 2):
        surviving_peeps.append(array_of_peeps[i])
        if i == number_of_peeps - 1:
            del surviving_peeps[0]
    murder_peeps(surviving_peeps)


josephus(41)
