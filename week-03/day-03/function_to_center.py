from tkinter import *

root = Tk()

canvas_size = 300
canvas = Canvas(root, width=canvas_size, height=canvas_size)
canvas.pack()


# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

def line_to_center(x, y):
    canvas.create_line(x, y, canvas_size/2, canvas_size/2)


def draw_all_the_lines(step):
    for i in range(int(canvas_size/step)+1):
        line_to_center(0, i * step)
        line_to_center(i * step, 0)
        line_to_center(canvas_size, i * step)
        line_to_center(i * step, canvas_size)


draw_all_the_lines(20)
root.mainloop()
