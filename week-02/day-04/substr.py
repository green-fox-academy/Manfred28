''' Find part of an integer

Create a function that takes two strings as a parameter
Returns the starting index where the second one is starting in the first one
Returns -1 if the second string is not in the first one
Example

input: "this is what I'm searching in", "searching"
output: 17 '''

input_str = "this is what I'm searching in"
keyword = "searching" 

def find_substr(input_str, keyword):
    start_index = -1
    for i in range(len(input_str)):
        for j in range(len(keyword)):
            if not input_str[i + j] == keyword[j]:
                break
            elif j == len(keyword) - 1:
                start_index = i
    return start_index

print(find_substr(input_str, keyword))