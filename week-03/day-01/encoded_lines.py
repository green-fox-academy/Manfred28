# Create a method that decrypts encoded-lines.txt
def decrypt(file_name):
    with open(file_name, "r") as file:
        decoded_text = "" 
        for line in file:
            for char in line:
                decoded_text += char if char.isspace() else decrypt_char(char)
        print(decoded_text)

def decrypt_char(char):
    return chr(ord(char)-1)


decrypt("encoded_lines.txt")