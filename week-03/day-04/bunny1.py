# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

def bunny_ear_count(bunny_count):
    if bunny_count == 0:
        return 0
    return bunny_ear_count(bunny_count - 1) + 2
