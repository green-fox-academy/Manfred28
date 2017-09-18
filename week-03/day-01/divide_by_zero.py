# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

''' def divide_by_ten(number):
    if number == 0: raise Exception("I Abhor Zeros")
    return number / 10

try: 
    number = int(input("Enter a number: "))
    print(divide_by_ten(number)
except Exception as e:
    print(e) 
 '''


def divide_by_ten(number):
    return 10 / number

try: 
    number = int(input("Enter a number: "))
    print(divide_by_ten(number))
except ZeroDivisionError:
    print("Can't divide by zero")
except ValueError:
    print("Input is not a valid integer")
    