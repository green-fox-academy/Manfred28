class Entity(object):
    def __init__(self, pos_x, pos_y, image):
        self.pos_x = pos_x
        self.pos_y = pos_y
        self.image = image

    def move(self, direction):
        if direction == "up":
            self.pos_y -= 1
        elif direction == "down":
            self.pos_y += 1
        elif direction == "left":
            self.pos_x -= 1
        elif direction == "right":
            self.pos_x += 1
            