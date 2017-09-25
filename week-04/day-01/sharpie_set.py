# Sharpie Set

# Reuse your Sharpie class
# Create SharpieSet class
# it contains a list of Sharpie
# count_usable() -> sharpie is usable if it has ink in it
# remove_trash() -> removes all unusable sharpies

from Sharpie import Sharpie

class SharpieSet(object):
    sharpies = [Sharpie("red", 10), Sharpie("blue", 10), Sharpie("yellow", 10), Sharpie("green", 10)]

    def count_usable(self):
        count = 0
        for sharpie in self.sharpies:
            if sharpie.ink_amount > 0:
                count += 1
        return count

    def remove_trash(self):
        usable_sharpies = []
        for sharpie in self.sharpies:
            if sharpie.ink_amount > 0:
                usable_sharpies.append(sharpie)
        self.sharpies = usable_sharpies
