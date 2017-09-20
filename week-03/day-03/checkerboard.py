from tkinter import *

root = Tk()

max_width = 300
max_height = 300

canvas = Canvas(root, width=max_width, height=max_height)
canvas.pack()

def draw_square(x0,y0, width, filler=None):
    canvas.create_rectangle(x0, y0, x0 + width, y0 + width, fill=filler)


def draw_checker_line(y_offset, board_width, square_size, first_color, second_color):
    number_of_squares = int(board_width / square_size)
    x_offset = 0
    for i in range(number_of_squares):
        color = first_color if i % 2 == 0 else second_color
        draw_square(x_offset, y_offset, square_size, filler=color)
        x_offset += square_size


def draw_checkerboard(max_width, max_height, square_size):
    number_of_lines = int(max_height / square_size)
    for line in range(number_of_lines):
        y_offset = line * square_size
        first_color = "black" if line % 2 == 0 else "white"
        second_color = "white" if line % 2 == 0 else "black"
        draw_checker_line(y_offset, max_width, square_size, first_color, second_color)

draw_checkerboard(max_width, max_height, square_size=50)
root.mainloop()