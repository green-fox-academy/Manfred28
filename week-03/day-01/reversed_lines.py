# Create a method that decrypts reversed-lines.txt

def decrypt(file_name):
    with open(file_name, "r") as file:
        for line in file:
            print(line[::-1])


decrypt("reversed-lines.txt")