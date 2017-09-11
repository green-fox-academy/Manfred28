# Write a program that asks for 5 integers in a row,
# then it should print the sum and the average of these numbers like:
#
# Sum: 22, Average: 4.4

user_input = []
input_sum = 0
avg = 0

for i in range(5):
    number = int(input("enter an integer: "))
    user_input.append(number)

input_sum = sum(user_input)
avg = input_sum / len(user_input)

print(input_sum)
print(avg)
