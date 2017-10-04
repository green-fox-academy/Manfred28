from random import choice, randint

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
        self.max_hp = 20 + 3 * d6()
        self.dp = 2 * d6()
        self.sp = 5 + d6()
        self.current_hp = self.max_hp

    def move(self, direction):
        super().move(direction)
        self.current_image = "hero-" + direction
    

class Skeleton(Entity):
    def __init__(self, position):
        super().__init__(position)
        self.current_image = "skeleton"
        self.level = 1
        self.max_hp = 2 * self.level * d6()
        self.dp = self.level / 2 * d6()
        self.sp = self.level *d6()
        self.current_hp = self.max_hp

    def get_move_direction(self):
        directions = ("up", "down", "left", "right")
        return choice(directions)
    

class Boss(Skeleton):
    def __init__(self, position):
        super().__init__(position)
        self.current_image = "boss"
        self.level = 1
        self.max_hp = 2 * self.level * d6() + d6()
        self.dp = self.level / 2 * d6() + d6() / 2
        self.sp = self.level *d6() + self.level
        self.current_hp = self.max_hp

def d6():
    return randint(0,6)
