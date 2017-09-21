# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def convert_x_to_y(string):
    if len(string) == 0:
        return ""
    last_char = "y" if string[-1] == "x" else string[-1]
    return  convert_x_to_y(string[:-1]) + last_char

print(convert_x_to_y("x is y axxxxx"))