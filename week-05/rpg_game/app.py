from map import GameMap
from game_logic import GameLogic
from view import View

class App(object):
    def __init__(self):
        self.game_map = GameMap()
        self.game_logic = GameLogic(self.game_map)
        self.view = View(self.game_map.game_map)   

        self.render_entities()
        self.enemy_actions()
        self.player_actions()
        self.render_hud()

    def render_entities(self):
        self.view.delete_entities()
        self.view.draw_entities(self.game_logic.entities)
        self.view.root.after(60, self.render_entities)

    def render_hud(self):
        self.view.delete_hud()
        self.view.draw_HUD(self.game_logic.hero)
        self.view.root.after(1000, self.render_hud)

    def enemy_actions(self):
        self.game_logic.move_enemies()
        self.game_logic.enemy_strike()
        self.view.root.after(500, self.enemy_actions)

    def player_actions(self):
        self.move_player()
        self.player_strike()
        self.view.root.after(60, self.player_actions)

    def move_player(self):
        if self.view.player_move_direction != None:
            self.game_logic.move_entity(self.game_logic.hero, self.view.player_move_direction)
            self.view.player_move_direction = None
        
    def player_strike(self):
        if self.view.player_strike and self.game_logic.hero.can_strike:
            self.game_logic.hero.strike()
        self.view.player_strike = False



app = App()
app.view.start()
