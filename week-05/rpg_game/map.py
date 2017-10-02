class GameMap(object):
    def __init__(self):
        self.game_map = []
        self.read_map_from_file()

    def read_map_from_file(self):
        with open("map.txt", "r") as map_file:
            map_file = map_file.read().split("\n")
            for i in range(len(map_file)):
                map_file[i] = map_file[i].split(",")
            self.game_map = map_file