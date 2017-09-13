# Create a function called 'create_new_verbs()' which takes a list of verbs and a string as parameters
# The string shouldf be a preverb
# The function appends every verb to the preverb and returns the list of the new verbs

#!/usr/bin/env python
# -*- coding: utf-8 -*-


verbs = ["megy", "ver", "kapcsol", "rak", "néz"]
preverb = "be"

def create_new_verbs(verbs, preverb):
    new_verbs = []
    for verb in verbs:
        new_verbs.append(preverb + verb)
    return new_verbs

print(create_new_verbs(verbs, preverb))