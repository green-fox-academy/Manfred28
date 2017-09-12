# - Create an array variable named `ag`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Double all the values in the array

ag = [3, 4, 5, 6, 7]

def double(input_list):
    for i in range(len(input_list)):
        input_list[i] *= 2

double(ag)
print(ag)