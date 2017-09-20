from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/line-play/r1.png]

def line_play(start, end, step, color, x_offset, y_offset):
    for i in range(start, end, step):
        x0 = start + x_offset
        y0 = i + y_offset
        x1 = i + step + x_offset
        y1 = end + y_offset
        canvas.create_line(x0, y0, x1, y1, fill=color)

def line_play_quarter(start, end, step, color1, color2, x_offset=0, y_offset=0):
    line_play(start, end, step, color1, x_offset, y_offset)
    line_play(end, start, -step, color2, x_offset, y_offset)


line_play_quarter(0, 150, 10, "green", "purple") # top-left
line_play_quarter(0, 150, 10, "green", "purple", x_offset=150) # top-right
line_play_quarter(0, 150, 10, "green", "purple", y_offset=150) # bottom-left
line_play_quarter(150, 300, 10, "green", "purple") # bottom-right


root.mainloop()