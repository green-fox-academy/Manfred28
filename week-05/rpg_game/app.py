from map import GameMap
from view import View
from entity_controller import EntityController

class App(object):
    def __init__(self):
        self.game_map = GameMap()
        self.view = View(self.game_map.game_map, self.game_map.hero)
        self.entity_controller = EntityController(self.game_map, self.view)

app = App()
app.view.start()
