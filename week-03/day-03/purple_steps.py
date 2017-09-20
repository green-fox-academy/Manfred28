from tkinter import *

root = Tk()

canvas = Canvas(root, width="200", height="200")
canvas.pack()

def draw_square(x0,y0, width, filler=None):
    canvas.create_rectangle(x0, y0, x0 + width, y0 + width, fill=filler)


def draw_steps(square_width, margin, steps):
    for i in range(steps):
        offset = i * square_width + margin
        draw_square(offset, offset, square_width, filler="purple")


draw_steps(square_width = 15, margin = 10, steps= 11)
root.mainloop()