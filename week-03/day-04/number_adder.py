# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def number_adder(num):
    if num == 1:
        return num
    return number_adder(num-1) + num



print(number_adder(5))
