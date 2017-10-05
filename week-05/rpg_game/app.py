from map import GameMap
from game_logic import GameLogic
from view import View

class App(object):
    def __init__(self):
        self.game_map = GameMap()
        self.game_logic = GameLogic(self.game_map)
        self.view = View(self.game_map.game_map)   

        self.game_logic.start_level()
        self.render = self.start_render()
        self.enemy_actions()
        self.player_actions()
        
        self.check_game_status()

    def start_render(self):
        self.render_entities()
        self.render_hud()
        self.render = self.view.root.after(60, self.start_render)

    def stop_render(self):
        self.view.root.after_cancel(self.render)

    def render_entities(self):
        self.view.delete_entities()
        self.view.draw_entities(self.game_logic.entities)

    def render_hud(self):
        self.view.delete_hud()
        self.view.draw_HUD(self.game_logic.hero)

    def enemy_actions(self):
        for enemy in self.game_logic.entities[1:]:
            self.game_logic.move_entity(enemy, enemy.get_move_direction())
            self.game_logic.enemy_strike(enemy)
            self.game_logic.remove_dead_entities(enemy)
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

    def check_game_status(self):
        if self.game_logic.is_level_over():
            self.stop_render()
            self.show_game_level()
            self.view.root.after(1100, lambda: self.view.draw_map(self.game_map.game_map))
            self.view.root.after(1200, self.game_logic.start_level)
            self.view.root.after(1200, self.start_render)
            
        self.view.root.after(2000, self.check_game_status)

    def show_game_level(self):
        self.view.clear_view()
        self.view.write_level_info(self.game_logic.current_level + 1)
        self.view.root.after(1000, self.view.clear_view)
        

app = App()
app.view.start()
