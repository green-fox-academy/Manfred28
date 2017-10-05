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
                             "boss": tkinter.PhotoImage(file="assets/boss.png"),
                             }
        self.draw_map(game_map)
        self.player_move_direction = None
        self.player_strike = False
        self.entity_ids = []
        self.hud = None

    def create_canvas(self):
        self.root = tkinter.Tk()
        self.canvas = tkinter.Canvas(self.root, width=900, height=700)
        self.root.bind("<KeyPress>", self.player_keypress)
        self.canvas.pack()

    def draw_image(self, pos_x, pos_y, image_name):
        return self.canvas.create_image(pos_x, pos_y, image=self.photo_images[image_name])

    def pos_to_pixel(self, position):
        return 36 + 71 * position

    def start(self):
        self.root.mainloop()

    def player_keypress(self, e):
        if e.keycode == 37:
            self.player_move_direction = "left"
        elif e.keycode == 38:
            self.player_move_direction = "up"
        elif e.keycode == 39:
            self.player_move_direction = "right"
        elif e.keycode == 40:
            self.player_move_direction = "down"
        elif e.keycode == 32:
            self.player_strike = True


    def draw_map(self, game_map):
        for y, row in enumerate(game_map):
            for x, tile in enumerate(row):
                if tile == "_":
                    self.draw_image(self.pos_to_pixel(x), self.pos_to_pixel(y), "floor")
                elif tile == "X":
                    self.draw_image(self.pos_to_pixel(x), self.pos_to_pixel(y), "wall")

    def draw_entities(self, entities):
        for entity in entities:
            pos_x = self.pos_to_pixel(entity.pos_x)
            pos_y = self.pos_to_pixel(entity.pos_y)
            self.entity_ids.append(self.draw_image(pos_x, pos_y, entity.current_image))

    def delete_entities(self):
        for entity in self.entity_ids:
            self.canvas.delete(entity)
            
    def draw_HUD(self, hero):
        self.hud = self.canvas.create_text(800, 50, text=(
                                                    "Hero: \n" + 
                                                    "HP: " + str(hero.current_hp) + "/" + str(hero.max_hp)) + "\n" +
                                                    "Defense points: " + str(hero.dp) + "\n" +
                                                    "Attack points: " + str(hero.sp))

    def delete_hud(self):
        self.canvas.delete(self.hud)            
