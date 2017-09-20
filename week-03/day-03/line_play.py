from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


def lines1():
    for i in range(0, 300, 20):
        canvas.create_line(0, i, i+20, 300, fill="green")

def lines2():
    for i in range(300, 0, -20):
        canvas.create_line(300, i, i-20, 0, fill="purple")

lines1()
lines2()
root.mainloop()