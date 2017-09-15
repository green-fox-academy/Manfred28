from random import randint

''' Exercise

Write a program where the program chooses a number between 1 and 100. The player is then asked to enter a guess. If the player guesses wrong, then the program gives feedback and ask to enter an other guess until the guess is correct.

Make the range customizable (ask for it before starting the guessing).
You can add lives. (optional) '''

def get_parameters():
    lives = int(input("How many lives you want to have: "))
    bottom_range = int(input("Enter the lower range: "))
    top_range = int(input("Enter the higher range: "))
    return lives, bottom_range, top_range

def guess_the_number():
    lives, bottom_range, top_range = get_parameters()
    number_to_guess = randint(bottom_range, top_range)
    user_input = -1


    while not user_input == number_to_guess and lives > 0:
        print(lives)
        user_input = int(input("Enter a number: "))
        if user_input == number_to_guess:
            print("Congrats, you won")
        elif user_input < number_to_guess:
            print("Guess higher")
            lives -= 1
        elif user_input > number_to_guess:
            print("Guess lower")
            lives -= 1
    if lives == 0:
        print("Out of lives")


guess_the_number()
