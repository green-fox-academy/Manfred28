# Create a simple calculator application which does read the parameters from the prompt 
# and prints the result to the prompt. 

# It should support the following operations: 
# +, -, *, /, % and it should support two operands. 

# The format of the expressions must be: {operation} {operand} {operand}. 
# Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

# You should use the input() function to accept user input
# It should work like this:

# Start the program
# It prints: "Please type in the expression:"
# Waits for the user input
# Print the result
# Exit





print("Please type in the expression: ")
operation = input("Enter the operation: ")
operand1 = input("Enter the first number: ")
operand2 = input("Enter the second number: ")
print(eval(operand1 + operation + operand2))
