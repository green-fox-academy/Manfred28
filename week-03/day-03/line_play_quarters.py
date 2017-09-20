from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/line-play/r1.png]

def line_play(step, x_offset, y_offset, is_reverse=False):
    start_point, end_point = [150, 0] if is_reverse else [0, 150]
    color = "purple" if is_reverse else "green"
    for i in range(start_point, end_point, step):
        x0 = start_point + x_offset
        y0 = i + y_offset
        x1 = i + step + x_offset
        y1 = end_point + y_offset
        canvas.create_line(x0, y0, x1, y1, fill=color)

def line_play_quarter(step, x_offset=0, y_offset=0):
    line_play(step, x_offset, y_offset)
    line_play(-step, x_offset, y_offset, is_reverse=True)


line_play_quarter(step=10) # top-left
line_play_quarter(step=10, x_offset=150) # top-right
line_play_quarter(step=10, y_offset=150) # bottom-left
line_play_quarter(step=10, x_offset=150, y_offset=150) # bottom-right


root.mainloop()