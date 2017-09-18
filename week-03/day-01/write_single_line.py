# Open a file called "my-file.txt"
# Write your name in it as a single line
# If the program is unable to write the file,
# then it should print an error message like: "Unable to write file: my-file.txt"

try:
    with open("my-filea.txt", "a") as file:
        file.write("\nIstván")
except:
    print("Unable to write file: my-file.txt")