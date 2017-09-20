from tkinter import *

root = Tk()

canvas = Canvas(root, width="200", height="200")
canvas.pack()


def create_triangle(x, y, size):
    canvas.create_polygon((x, y + size, x + int(size / 2), y, x + size, y + size), fill="white", outline="black")

def triangle_row(num_of_triangles, start_x, start_y, size):
    for i in range(num_of_triangles):
        create_triangle(start_x, start_y, size)
        start_x += size

def pyramid(number_of_rows, triangle_size, margin):
    for row in range(0, number_of_rows + 1):
        offset_x = (number_of_rows - row) * triangle_size / 2 + margin
        offset_y = ( row) * triangle_size
        triangle_row(row, offset_x, offset_y, triangle_size)


pyramid(number_of_rows=21, triangle_size=9, margin=10)


# triangle_row(9, 10/2, 0)
# triangle_row(10, 0, 10)
root.mainloop()

