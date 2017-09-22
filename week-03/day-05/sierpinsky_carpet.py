import tkinter
from random import randint

root = tkinter.Tk()

canvas = tkinter.Canvas(root, width=300, height=300)
canvas.pack()

squares = []

def draw_square(x0,y0, size, filler=None):
    offset = size / 2
    return canvas.create_rectangle(
                                    x0 - offset, 
                                    y0 - offset, 
                                    x0 + offset, 
                                    y0 + offset, 
                                    fill=filler
                                    )


def sierpinsky(x, y, size):
    if size < 5:
        return
    squares.append(draw_square(x, y, size, "black"))
    new_size = size / 3
    sierpinsky(x - size, y - size, new_size) # top-left
    sierpinsky(x, y - size, new_size) # top
    sierpinsky(x + size, y - size, new_size) # top-right
    sierpinsky(x + size, y, new_size) # right
    sierpinsky(x + size, y + size, new_size) # bottom-right
    sierpinsky(x, y + size, new_size) # bottom
    sierpinsky(x - size, y + size, new_size) # bottom-left
    sierpinsky(x - size, y, new_size) # left


sierpinsky(150, 150, 100)


root.mainloop()




# Epilepsy
