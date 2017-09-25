from random import randint

class Pirate(object):
    def __init__(self, parrot):
        self.drink_counter = 0
        self.is_conscious = True
        self.is_alive = True
        self.is_captain = parrot

    def drink_some_rum(self):
        self.drink_counter += 1

    def hows_it_going_mate(self):
        if self.is_alive and self.is_conscious:
            if self.drink_counter <= 4:
                print("Pour me anudder!")
                self.drink_some_rum()
            else:
                print("Arghh, I'ma Pirate. How d'ya d'ink its goin?")
                self.is_conscious = False
        elif not self.is_alive:
            print("he's dead")
        else:
            print("he's out stupid")

    def die(self):
        self.is_alive = False
        self.is_conscious = False

    def brawl(self, enemy):
        if enemy.is_alive and self.is_alive:
            roll = randint(1,3)
            if roll == 1:
                self.is_alive = False
            elif roll == 2:
                enemy.is_alive = False
            else:
                self.is_conscious = False
                enemy.is_conscious = False

    def get_state(self):
        return ("alive and well" if self.is_alive and self.is_conscious else
                "sadly deceased" if not self.is_alive else
                "passed out")


class PirateShip(object):
    def __init__(self):
        self.crew = []
        self.alive_crew_count = 0

    def __str__(self):
        self.update_alive_crew_count()
        captain = self.crew[0]
        captain_state = captain.get_state()
        out = ("Captain consumed " + str(captain.drink_counter) + " rums. \n" +
               "Captain is " + captain_state + ".\n" +
               "Number of crew alive: " + str(self.alive_crew_count))
        return out

    def fill_ship(self, Pirate):
        number_of_pirates = randint(1, 10)
        for i in range(number_of_pirates):
            is_captain = True if i == 0 else False
            self.crew.append(Pirate(is_captain))

    def update_alive_crew_count(self):
        count = 0
        for pirate in self.crew:
            if pirate.is_alive:
                count += 1
        self.alive_crew_count = count
