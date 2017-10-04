import entities

class GameMap(object):
    def __init__(self):
        self.game_map = []
        self.read_map_from_file()
        self.hero = entities.Hero(0, 0)

    def read_map_from_file(self):
        with open("map.txt", "r") as map_file:
            map_file = map_file.read().split("\n")
            for i in range(len(map_file)):
                map_file[i] = map_file[i].split(",")
            self.game_map = map_file

    def move_entity(self, entity, direction):
        if direction == "up":
            if entity.pos_y - 1 >= 0 and not self.is_wall(entity.pos_y - 1, entity.pos_x):
                entity.move("up")
        elif direction == "down":
            if entity.pos_y + 1 < 10 and not self.is_wall(entity.pos_y + 1, entity.pos_x):
                entity.move("down")
        elif direction == "left":
            if entity.pos_x - 1 >= 0 and not self.is_wall(entity.pos_y, entity.pos_x - 1):
                entity.move("left")
        elif direction == "right":
            if entity.pos_x + 1 < 10 and not self.is_wall(entity.pos_y, entity.pos_x + 1):
                entity.move("right")

    def is_wall(self, pos_y, pos_x):
        return self.game_map[pos_y][pos_x] == "X"