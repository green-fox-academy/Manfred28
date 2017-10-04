from entities import Entity

class EntityController(object):
    def __init__(self, game_map, view):
        self.game_map = game_map
        self.view = view
        self.entity_image_ids = []

        self.entity_lifecycle()
        self.move_enemies()


    def entity_lifecycle(self):
        self.move_player()
        self.view.delete_entities()
        self.view.draw_entities(self.game_map.entities)
        self.view.root.after(100, self.entity_lifecycle)

    def move_player(self):
        if self.view.player_move_direction != None:
            self.game_map.move_entity(self.game_map.entities[0], self.view.player_move_direction)
            self.view.player_move_direction = None

    def move_enemies(self):
        self.game_map.move_enemies()
        self.view.root.after(500, self.move_enemies)
