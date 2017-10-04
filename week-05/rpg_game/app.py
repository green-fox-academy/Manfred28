from map import GameMap
from view import View

class App(object):
    def __init__(self):
        self.game_map = GameMap()
        self.view = View(self.game_map.game_map)   
        self.entity_lifecycle()
        self.move_enemies()

    def entity_lifecycle(self):
        self.move_player()
        self.player_strike()
        self.game_map.enemy_strike()
        self.view.delete_entities()
        self.view.draw_entities(self.game_map.entities)
        self.view.root.after(1, self.entity_lifecycle)

    def move_player(self):
        if self.view.player_move_direction != None:
            self.game_map.move_entity(self.game_map.hero, self.view.player_move_direction)
            self.view.player_move_direction = None

    def move_enemies(self):
        self.game_map.move_enemies()
        self.view.root.after(500, self.move_enemies)

    def player_strike(self):
        if self.view.player_strike and self.game_map.hero.can_strike:
            self.game_map.hero.strike()
        self.view.player_strike = False


app = App()
app.view.start()
