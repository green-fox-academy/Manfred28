from random import choice

class Entity(object):
    def __init__(self, position):
        self.pos_x, self.pos_y = position

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
    def __init__(self, position):
        super().__init__(position)
        self.current_image = "hero-down"
        

    def move(self, direction):
        super().move(direction)
        self.current_image = "hero-" + direction
    

class Skeleton(Entity):
    def __init__(self, position):
        super().__init__(position)
        self.current_image = "skeleton"
        

    def get_move_direction(self):
        directions = ("up", "down", "left", "right")
        return choice(directions)
    
class Boss(Skeleton):
    def __init__(self, position):
        super().__init__(position)
        self.current_image = "boss"
        