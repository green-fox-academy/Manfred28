# We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).


def bunny_ear_count2(bunny_count):
    if bunny_count == 0:
        return 0
    ear_number = 2 if bunny_count % 2 == 0 else 3
    return bunny_ear_count2(bunny_count - 1) + ear_number


print(bunny_ear_count2(4))