''' Write a simple program to check if a given number is an armstrong number. 
The program should ask for a number. 
E.g. if we type 371, the program should print out: The 371 is an Armstrong number. '''

def is_armstrong_number(number):
    num_in_string = str(number)
    places = len(num_in_string)
    armstrong = 0

    for i in range(places):
        armstrong += int(num_in_string[i]) ** places
    
    if armstrong == number:
        print(str(number) + " is an Armstrong number")
    else:
        print(str(number) + " is not an Armstrong number")


is_armstrong_number(372)
