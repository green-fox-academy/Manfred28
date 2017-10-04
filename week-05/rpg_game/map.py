from random import randint
import entities

class GameMap(object):
    def __init__(self):
        self.game_map = []
        self.read_map_from_file()
        self.entities = [entities.Hero([0, 0])]
        self.generate_enemies()

    def read_map_from_file(self):
        with open("map.txt", "r") as map_file:
            map_file = map_file.read().split("\n")
            for i in range(len(map_file)):
                map_file[i] = map_file[i].split(",")
            self.game_map = map_file

    def is_wall(self, pos_x, pos_y):
        return self.game_map[pos_y][pos_x] == "X"

    def move_entity(self, entity, direction):
        if direction == "up":
            if entity.pos_y - 1 >= 0 and not self.is_wall(entity.pos_x, entity.pos_y - 1):
                entity.move("up")
        elif direction == "down":
            if entity.pos_y + 1 < 10 and not self.is_wall(entity.pos_x, entity.pos_y + 1):
                entity.move("down")
        elif direction == "left":
            if entity.pos_x - 1 >= 0 and not self.is_wall(entity.pos_x - 1, entity.pos_y):
                entity.move("left")
        elif direction == "right":
            if entity.pos_x + 1 < 10 and not self.is_wall(entity.pos_x + 1, entity.pos_y):
                entity.move("right")

    def move_enemies(self):
        for enemy in self.entities[1:]:
            self.move_entity(enemy, enemy.get_move_direction())

    def generate_enemies(self):
        for i in range(3):
            self.entities.append(entities.Skeleton(self.get_random_tile()))
        self.entities.append(entities.Boss(self.get_random_tile()))

    def get_random_tile(self):
        pos_x = randint(0, 9)
        pos_y = randint(0, 9)
        while self.is_wall(pos_x, pos_y):
            pos_x = randint(0, 9)
            pos_y = randint(0, 9)
        return [pos_x, pos_y]