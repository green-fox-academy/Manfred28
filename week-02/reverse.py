# Create a function called 'reverse_string' which takes a string as a parameter
# The function reverses it and returns with the reversed string


reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

def reverse_string(str):
    reversed_str = ""
    for i in range(len(str) -1 , -1, -1):
        reversed_str += str[i]
    return reversed_str

def reverse_string2(str):
    return str[::-1]

def reverse_string3(str):
    if len(str) == 1:
        return str
    return str[-1] + reverse_string(str[0:-1])

print(reverse_string(".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"))
print(reverse_string2(".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"))
print(reverse_string3(".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"))