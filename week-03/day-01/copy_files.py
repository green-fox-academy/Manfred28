# Write a function that copies a file to an other
# It should take the filenames as parameters
# It should return a boolean that shows if the copy was successful

from os import system

def copy_files(file1, file2):
    cmd = "cp " + file1 + " " + file2
    system(cmd)

copy_files("my-file.txt", "new-file.txt")