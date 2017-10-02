import tkinter

class View(object):
    def __init__(self, game_map):
        self.create_canvas()
        self.photo_images = {"floor": tkinter.PhotoImage(file="floor.png"),
                             "wall": tkinter.PhotoImage(file="wall.png")}
        self.draw_map(game_map)


    def create_canvas(self):
        self.root = tkinter.Tk()
        self.canvas = tkinter.Canvas(self.root, width=700, height=700)
        self.canvas.pack()

    def start(self):
        self.root.mainloop()

    def draw_map(self, game_map):
        for y, row in enumerate(game_map):
            for x, tile in enumerate(row):
                if tile == "_":
                    self.canvas.create_image(36 + 71 * x, 36 + 71 * y, image=self.photo_images["floor"])
                elif tile == "X":
                    self.canvas.create_image(36 + 71 * x, 36 + 71 * y, image=self.photo_images["wall"])
