''' Unique - remove the duplicates

Create a function that takes a list of numbers as a parameter
Returns a list of numbers where every number in the list occurs only once
Example

input: [1, 11, 34, 11, 52, 61, 1, 34]
output: [1, 11, 34, 52, 61] '''


def unique_elements1(input_list):
    input_list = list(input_list)
    input_list.sort()
    unique_list = []
    for i in range(len(input_list) - 1):
        if not input_list[i] == input_list[i + 1]:
            unique_list.append(input_list[i])
    if not input_list[-1] == input_list[-2]:
        unique_list.append(input_list[-1])        
    return unique_list


''' This would work in JS 

def unique_elements2(input_list):
    unique_list = []
    for i in range(len(input_list)):
        unique_list[input_list[i]] = input_list[i]
    return unique_list '''


def unique_elements3(input_list):
    unique_list = []
    for elem in input_list:
        if not elem in unique_list:
            unique_list.append(elem)
    return unique_list

input_list: [1, 11, 34, 11, 52, 61, 1, 34]
print(unique_elements1([1, 11, 34, 11, 52, 61, 1, 34]))
print(unique_elements3([1, 11, 34, 11, 52, 61, 1, 34]))
#print(unique_elements2([1, 11, 34, 11, 52, 61, 1, 34]))
