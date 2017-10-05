from random import choice, randint

class Entity(object):
    def __init__(self, position):
        self.pos_x, self.pos_y = position
        self.fighting_enemy = None
        self.can_strike = False
        self.level = 1
        self.max_hp = 0
        self.dp = 0
        self.sp = 0

    def strike(self):
        self.can_strike = False
        sv = self.sp + 2 * d6()
        if self.fighting_enemy.dp < sv:
            self.fighting_enemy.current_hp -= sv - self.fighting_enemy.dp
        if self.fighting_enemy.current_hp <= 0:
            self.level_up()
            self.fighting_enemy.die()
            self.fighting_enemy = None
        else:
            self.fighting_enemy.can_strike = True

    def die(self):
        self.pos_x = -1
        self.pos_y = -1
        self.can_strike = False

    def level_up(self):
        self.level += 1
        self.max_hp += d6()
        self.dp += d6() // 2
        self.sp += d6() // 2

class Hero(Entity):
    def __init__(self, position):
        super().__init__(position)
        self.current_image = "hero-down"
        self.evil = False
        self.max_hp = 20 + 3 * d6()
        self.dp = 2 * d6()
        self.sp = 5 + d6()
        self.current_hp = self.max_hp

    def change_model(self, direction):
        self.current_image = "hero-" + direction

    def chance_to_heal(self):
        roll = randint(1, 10)
        if roll == 1:
            self.current_hp = self.max_hp
        elif roll > 1 and roll <= 5:
            self.current_hp += self.max_hp // 3
        elif roll > 5:
            self.current_hp += self.max_hp // 10
        if self.current_hp > self.max_hp:
            self.current_hp -= self.max_hp - self.current_hp


class Skeleton(Entity):
    def __init__(self, position, level):
        super().__init__(position)
        self.current_image = "skeleton"
        self.evil = True
        self.has_key = False
        self.level = level
        self.max_hp = 2 * self.level * d6()
        self.dp = self.level / 2 * d6()
        self.sp = self.level *d6()
        self.current_hp = self.max_hp

    def get_move_direction(self):
        directions = ("up", "down", "left", "right")
        return choice(directions)


class Boss(Skeleton):
    def __init__(self, position, level):
        super().__init__(position, level)
        self.current_image = "boss"
        self.max_hp = 2 * self.level * d6() + d6()
        self.dp = self.level / 2 * d6() + d6() / 2
        self.sp = self.level *d6() + self.level
        self.current_hp = self.max_hp

def d6():
    return randint(1,6)
