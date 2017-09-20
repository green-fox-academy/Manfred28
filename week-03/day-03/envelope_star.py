from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/line-play/r1.png]

def line_play(start, end, step, color, x_offset=0, y_offset=0):
    for i in range(start, end, step):
        x0 = end
        y0 = start + i
        x1 = end - i 
        y1 = end - y_offset
        canvas.create_line(x0, y0, x1, y1, fill=color)


def line_play2(start, end, step, color, x_offset=0, y_offset=0):
    for i in range(start, end, step):
        x0 = end
        y0 = start + i
        x1 = end + i 
        y1 = end
        canvas.create_line(x0, y0, x1, y1, fill=color)


def line_play3(start, end, step, color, x_offset=0, y_offset=0):
    for i in range(start, end, step):
        x0 = end 
        y0 = end + y_offset - i
        x1 = end + i
        y1 = end
        canvas.create_line(x0, y0, x1, y1, fill=color)


def line_play4(start, end, step, color, x_offset=0, y_offset=0):
    for i in range(start, end, step):
        x0 = end
        y0 = end + y_offset - i
        x1 = end - i
        y1 = end
        canvas.create_line(x0, y0, x1, y1, fill=color)



line_play(0, 150, 10, "green")
line_play2(0, 150, 10, "green")
line_play3(0, 150, 10, "green", y_offset=150)
line_play4(0, 150, 10, "green", y_offset=150)


''' line_play_quarter(0, 150, 10, "green", "purple") # top-left
line_play_quarter(0, 150, 10, "green", "purple", x_offset=150) # top-right
line_play_quarter(0, 150, 10, "green", "purple", y_offset=150) # bottom-left
line_play_quarter(150, 300, 10, "green", "purple") # bottom-right '''


root.mainloop()