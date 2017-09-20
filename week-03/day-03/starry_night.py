from tkinter import *
from random import randint

root = Tk()

canvas = Canvas(root, width='300', height='300', bg="black")
canvas.pack()

# draw the night sky:
# - The background should be black
# - The stars should be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)

def draw_square(x0,y0, width, filler=None):
    canvas.create_rectangle(x0, y0, x0 + width, y0 + width, fill=filler)


def night_sky():
    for i in range(100):
        x = randint(0,300)
        y = randint(0, 300)
        color = shades_of_gray()
        draw_square(x, y, 5, filler=color)

def shades_of_gray():
    num = str(randint(5, 10))
    return "#" + num * 6


night_sky()
root.mainloop()
