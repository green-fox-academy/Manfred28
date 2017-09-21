from tkinter import *
import time

root = Tk()

base_size = 300

canvas = Canvas(root, width=base_size, height=base_size, bg="yellow")
canvas.pack()

def draw_polygon(x,y, side_length):
    short_diagonal = 3 ** 0.5 * side_length
    y_offset = short_diagonal / 2
    x_offset = (side_length ** 2 - y_offset ** 2) ** 0.5
    canvas.create_polygon(
                            x, y,
                            x + x_offset, y - y_offset,
                            x + x_offset + side_length,  y - y_offset,
                            x + x_offset + side_length + x_offset, y,
                            x + x_offset + side_length, y + y_offset,
                            x + x_offset, y + y_offset,
                            fill="white", width=1, outline="black"
                            )

pol_size = base_size / 2
draw_polygon(0, pol_size, pol_size)

next_x = pol_size / 4
next_y = pol_size - (pol_size ** 2 - next_x ** 2) ** 0.5 
draw_polygon(next_x, next_y, pol_size / 2)
root.mainloop()