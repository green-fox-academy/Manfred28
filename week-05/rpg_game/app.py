from map import GameMap
from view import View

class App(object):
    def __init__(self):
        self.game_map = GameMap()
        self.view = View(self.game_map.game_map)

app = App()
app.view.start()
