# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def convert_x_to_y(string):
    if len(string) == 0:
        return ""
    last_char = "" if string[-1] == "x" else string[-1]
    return  convert_x_to_y(string[:-1]) + "" + last_char
