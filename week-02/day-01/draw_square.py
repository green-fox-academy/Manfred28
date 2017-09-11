# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %   %
# %   %
# %   %
# %   %
# %%%%%
#
# The square should have as many lines as the number was

square_height = int(input("Enter an integer: "))

for i in range(square_height):
    if i == 0 or i == square_height - 1:
        print("%" * square_height)
    else:
        print("%" + " " * (square_height - 2) + "%")