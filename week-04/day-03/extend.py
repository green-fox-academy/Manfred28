# Adds a and b, returns as result
def add(a, b):
    number_types = (int, float, complex)
    if isinstance(a, number_types) and isinstance(b, number_types):
        return a + b
    else:
        raise ValueError("can only add numbers")

# Returns the highest value from the three given params
def max_of_three(a, b, c):
    return max(a, b, c)

# Returns the median value of a list given as param
def median(pool):
    pool = sorted(pool)
    return pool[int((len(pool) - 1) / 2)]

# Returns true if the param is a vovel
def is_vovel(char):
    return char.lower() in 'aeiouéáőűöüóí'

# Create a method that translates hungarian into the teve language
def translate(hungarian):
    teve = hungarian
    for char in 'aeiouéáőűöüóí':
        teve = (char+'v'+char).join(teve.split(char))
    return teve