# Write a program that reads a number from the standard input, then draws a
# diamond like this:
#
#
#    *
#   ***
#  *****
# *******
#  *****
#   ***
#    *
#
# The diamond should have as many lines as the number was

diamond_height = int(input("Enter an integer: "))

for i in range(diamond_height):
    print(" " * (diamond_height-i) + "*" * (i*2) + "*")


for i in range(diamond_height, -1 , -1):
    print(" " * (diamond_height-i) + "*" * (i*2) + "*")
