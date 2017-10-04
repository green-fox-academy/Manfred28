import tkinter

class View(object):
    def __init__(self, game_map):
        self.create_canvas()
        self.photo_images = {"floor": tkinter.PhotoImage(file="assets/floor.png"),
                             "wall": tkinter.PhotoImage(file="assets/wall.png"),
                             "hero-down": tkinter.PhotoImage(file="assets/hero-down.png"),
                             "hero-up": tkinter.PhotoImage(file="assets/hero-up.png"),
                             "hero-left": tkinter.PhotoImage(file="assets/hero-left.png"),
                             "hero-right": tkinter.PhotoImage(file="assets/hero-right.png"),
                             "skeleton": tkinter.PhotoImage(file="assets/skeleton.png"),
                             }
        self.draw_map(game_map)
        self.player_move_direction = ""

    def create_canvas(self):
        self.root = tkinter.Tk()
        self.canvas = tkinter.Canvas(self.root, width=700, height=700)
        self.root.bind("<KeyPress>", self.player_move_on_keypress)
        self.canvas.pack()

    def start(self):
        self.root.mainloop()

    def player_move_on_keypress(self, e):
        if e.keycode == 37:
            self.player_move_direction = "left"
        elif e.keycode == 38:
            self.player_move_direction = "up"
        elif e.keycode == 39:
            self.player_move_direction = "right"
        elif e.keycode == 40:
            self.player_move_direction = "down"

    def draw_map(self, game_map):
        for y, row in enumerate(game_map):
            for x, tile in enumerate(row):
                if tile == "_":
                    self.canvas.create_image(self.pos_to_pixel(x), self.pos_to_pixel(y), image=self.photo_images["floor"])
                elif tile == "X":
                    self.canvas.create_image(self.pos_to_pixel(x), self.pos_to_pixel(y), image=self.photo_images["wall"])

    def create_entity(self, entity):
        pos_x = self.pos_to_pixel(entity.pos_x)
        pos_y = self.pos_to_pixel(entity.pos_y)
        return self.canvas.create_image(pos_x, pos_y, image=self.photo_images[entity.current_image])

    def pos_to_pixel(self, position):
        return 36 + 71 * position
