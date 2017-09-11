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
import re

pyramid_height = input("Enter an integer: ")
number_validator = re.compile(r"\D+")

while number_validator.match(pyramid_height) != None:
    pyramid_height = input("Enter an integer: ")

pyramid_height = int(pyramid_height)


for i in range(pyramid_height):

    print(" " * (pyramid_height-i) + "*" * (i*2) + "*")
