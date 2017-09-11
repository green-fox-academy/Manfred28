# Write a program that asks for a number.
# It would ask this many times to enter an integer,
# if all the integers are entered, it should print the sum and average of these
# integers like:
#
# Sum: 22, Average: 4.4

input_length = int(input("Enter an integer: "))
input_numbers = []
input_sum = 0
input_avg = 0

for i in range(input_length):
    number = int(input("Enter another integer: "))
    input_numbers.append(number)

input_sum = sum(input_numbers)
input_avg = input_sum / input_length

print("The sum of your numbers is: " + str(input_sum))
print("The average of your numbers is: " + str(input_avg))