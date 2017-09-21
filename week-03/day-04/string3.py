# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def convert_x_to_y(string):
    if len(string) == 1:
        return string
    return convert_x_to_y(string[:-1]) + "*" + string[-1]


print(convert_x_to_y("ayyylmao"))