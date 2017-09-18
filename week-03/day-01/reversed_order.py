# Create a method that decrypts reversed-order.txt
def decrypt(file_name):
    with open(file_name, "r") as file:
        file_lines = file.readlines()
        for i in range(len(file_lines) - 1, -1, -1):
            print(file_lines[i])

decrypt("reversed_order.txt")