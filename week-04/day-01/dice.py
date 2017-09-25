import random

class Dice(object):

    def __init__(self):
        self.dice = [0, 0, 0, 0, 0, 0]

    def roll(self):
        for i in range(len(self.dice)):
            self.dice[i] = random.randint(1,6)
        return self.dice

    def get_current(self, index=None):
        if index != None:
            return self.dice[index]
        else:
            return self.dice

    def reroll(self, index=None):
        if index != None:
            self.dice[index] = random.randint(1,6)
        else:
            self.roll()

    def roll_all_six(self):
        self.roll()
        for i in range(len(self.dice)):
            while not self.dice[i] == 6:
                self.reroll(i)

dice = Dice()
print(dice.get_current())
dice.roll()
print(dice.get_current())
dice.roll_all_six()
print(dice.get_current())