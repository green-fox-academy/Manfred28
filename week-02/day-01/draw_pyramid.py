# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

pyramid_height = int(input("Enter an integer: "))

for i in range(pyramid_height):
    print(" " * (pyramid_height-i) + "*" * (i*2) + "*")
