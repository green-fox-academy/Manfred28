import entities

class GameLogic(object):
    def __init__(self, game_map):
        self.game_map = game_map
        self.current_level = 0
        self.key_found = False
        self.boss_dead = False
        self.entities = [entities.Hero([0, 0])]
        self.hero = self.entities[0]


    def start_level(self):
        self.game_map.choose_map()
        self.hero.chance_to_heal()
        self.current_level += 1
        self.key_found = False
        self.boss_dead = False
        self.hero.pos_x, self.hero.pos_y = self.game_map.get_random_tile()
        self.entities = self.entities[0:1]
        self.generate_enemies()

    def generate_enemies(self):
        for i in range(3):
            self.entities.append(entities.Skeleton(self.game_map.get_random_tile(), self.current_level))
        self.entities[1].has_key = True
        self.entities.append(entities.Boss(self.game_map.get_random_tile(), self.current_level))

    def move_entity(self, entity, direction):
        pos_x, pos_y = self.get_new_pos_from_direction(entity.pos_x, entity.pos_y, direction)
        if self.find_entity_at_position(pos_x, pos_y):
            self.initiate_fight(entity, self.find_entity_at_position(pos_x, pos_y))
        elif self.is_valid_move(pos_x, pos_y) and not entity.fighting_enemy:
            entity.pos_x = pos_x
            entity.pos_y = pos_y
        if entity == self.hero:
            entity.change_model(direction)

    def find_entity_at_position(self, pos_x, pos_y):
        for entity in self.entities:
            if entity.pos_x == pos_x and entity.pos_y == pos_y:
                return entity
        return 0

    def is_valid_move(self, pos_x, pos_y):
        return (pos_x >= 0 and pos_x < 10 and
                pos_y >= 0 and pos_y < 10 and
                not self.game_map.is_wall(pos_x, pos_y))

    def get_new_pos_from_direction(self, pos_x, pos_y, direction):
        if direction == "up":
            pos_y -= 1
        elif direction == "down":
            pos_y += 1
        elif direction == "left":
            pos_x -= 1
        elif direction == "right":
            pos_x += 1  
        return pos_x, pos_y

    def initiate_fight(self, attacker, defender):
        if not attacker.evil == defender.evil and not defender.fighting_enemy:
            attacker.fighting_enemy = defender
            attacker.can_strike = True
            defender.fighting_enemy = attacker

    def enemy_strike(self, enemy):
        if enemy.can_strike:
            enemy.strike()

    def remove_dead_entities(self, entity):
        if entity.current_hp <= 0:
            del self.entities[self.entities.index(entity)]
            if isinstance(entity, entities.Boss):
                self.boss_dead = True
            if entity.has_key:
                self.key_found = True

    def is_level_over(self):
        return self.boss_dead and self.key_found
