from random import randint

class GameMap(object):
    def __init__(self):
        self.game_map = []
        self.choose_map()

    def choose_map(self):
        file_name = "map" + str(randint(1,4)) + ".txt"
        self.read_map_from_file(file_name)

    def read_map_from_file(self, file_name):
        with open("maps/" + file_name, "r") as map_file:
            map_file = map_file.read().split("\n")
            for i in range(len(map_file)):
                map_file[i] = map_file[i].split(",")
            self.game_map = map_file

    def is_wall(self, pos_x, pos_y):
        return self.game_map[pos_y][pos_x] == "X"

    def get_random_tile(self):
        pos_x = randint(0, 9)
        pos_y = randint(0, 9)
        while self.is_wall(pos_x, pos_y):
            pos_x = randint(0, 9)
            pos_y = randint(0, 9)
        return [pos_x, pos_y]
