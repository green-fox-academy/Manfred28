from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/line-play/r1.png]

def line_play(x_offset=0, y_offset=0, is_reverse=False):
    origo, canvas_size, step = [150, 0, -10] if is_reverse else [0, 150, 10]
    color = "purple" if is_reverse else "green"
    
    for i in range(origo, canvas_size, step):
        canvas.create_line(
                            x0 = origo + x_offset, 
                            y0 = i + y_offset,
                            x1 = i + step + x_offset, 
                            y1 = canvas_size + y_offset, 
                            fill=color
                            )


line_play() # top-left
line_play(is_reverse=True) # top-left

line_play(x_offset=150) # top-right
line_play(x_offset=150, is_reverse=True) # top-right

line_play(y_offset=150) # bottom-left
line_play(y_offset=150, is_reverse=True) # bottom-left

line_play(x_offset=150, y_offset=150) # bottom-right
line_play(x_offset=150, y_offset=150, is_reverse=True) # bottom-right


root.mainloop()