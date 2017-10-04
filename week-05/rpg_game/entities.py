class Entity(object):
    def __init__(self, pos_x, pos_y, image):
        self.pos_x = pos_x
        self.pos_y = pos_y
        self.current_image = image

    def move(self, direction):
        if direction == "up":
            self.pos_y -= 1
        elif direction == "down":
            self.pos_y += 1
        elif direction == "left":
            self.pos_x -= 1
        elif direction == "right":
            self.pos_x += 1
    

class Hero(Entity):
    def __init__(self, pos_x, pos_y):
        super().__init__(pos_x, pos_y, "hero-down")

    def move(self, direction):
        super().move(direction)
        self.current_image = "hero-" + direction
    