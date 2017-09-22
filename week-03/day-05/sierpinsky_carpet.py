import tkinter
from random import randint

root = tkinter.Tk()

c_width = 1200
c_height = 800

canvas = tkinter.Canvas(root, width=c_width, height=c_height)
canvas.pack()

squares = []


def move_right():
    for square in squares:
        funk_me = randint(1,5)
        canvas.move(square, +funk_me, 0)
        canvas.itemconfig(square, fill=random_color())


def move_left():
    for square in squares:
        funk_me = randint(1,5)    
        canvas.move(square, -funk_me, 0)
        canvas.itemconfig(square, fill=random_color())


def move_down():
    for square in squares:
        funk_me = randint(1,5)    
        canvas.move(square, 0, +funk_me)
        canvas.itemconfig(square, fill=random_color())


def move_up():
    for square in squares:
        funk_me = randint(1,5)    
        canvas.move(square, 0, -funk_me)
        canvas.itemconfig(square, fill=random_color())


def move_it_move_it():
    move_left()
    canvas.after(20, move_down)
    canvas.after(40, move_right)
    canvas.after(60, move_up)
    canvas.after(80, move_it_move_it)


def random_color():
    hexadecimal = "#" + str(randint(0, 9)) + str(randint(0, 9)) + str(randint(0, 9)) + str(randint(0, 9)) + str(randint(0, 9)) + str(randint(0, 9))
    return hexadecimal

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
    if size < 10:
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






def main():
    sierpinsky(c_width / 2, c_height / 2, 200)
    move_it_move_it()
    root.mainloop()


main()