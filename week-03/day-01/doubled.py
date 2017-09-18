# Create a method that decrypts the duplicated-chars.txt

def decrypt(file_name):
    try:
        with open(file_name, "r") as file:
            decoded_string = ""
            for line in file:
                for i in range(0, len(line), 2):
                    decoded_string += line[i]
            print(decoded_string)
    except:
        return 0


decrypt("duplicated_chars.txt")