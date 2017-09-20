from tkinter import *

root = Tk()

canvas = Canvas(root, width="200", height="200")
canvas.pack()

def draw_square(x0,y0, width, filler=None):
    canvas.create_rectangle(x0, y0, x0 + width, y0 + width, fill=filler)


''' Y U NO WORK
def draw_steps(growth, square_width, margin, steps):
    if steps == 0:
        return
    offset = steps * square_width + margin
    square_width = square_width + growth * steps
    draw_square(offset, offset, square_width, filler="purple")
    steps -= 1
    draw_steps(growth, square_width, margin, steps) '''
        





draw_steps(growth=10, square_width=5, margin=10, steps=12)
root.mainloop()