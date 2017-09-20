from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a function that takes 1 parameter:
# a list of [x, y] points
# and connects them with green lines.
# connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
# connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
# [120, 100], [85, 130], [50, 100]]


def connect_the_dots(dots):
    for i in range(len(dots)):
        if i < len(dots) -1:
            canvas.create_line(dots[i][0], dots[i][1], dots[i+1][0], dots[i+1][1])
        else:
            canvas.create_line(dots[i][0], dots[i][1], dots[0][0], dots[0][1])

connect_the_dots([[50, 100], [70, 70], [80, 90], [90, 90], [100, 70]])

root.mainloop()