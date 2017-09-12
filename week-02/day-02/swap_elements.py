# - Create a variable named `abc`
#   with the following content: `["first", "second", "third"]`
# - Swap the first and the third element of `abc`

abc = ["first", "second", "third"]

def swap(index1, index2, input_list):
    input_list = list(input_list) # avoids mutating the original list (shallow copy)

    temp = input_list[index1]
    input_list[index1] = input_list[index2]
    input_list[index2] = temp

    return input_list

abc = swap(0, 2, abc)
print(abc)
