from copy import deepcopy

class Aircraft(object):
    def __init__(self, type, max_ammo, base_dmg):
        self.type = type
        self.max_ammo = max_ammo
        self.base_dmg = base_dmg
        self.current_ammo = 0

    def fight(self):
        damage = self.current_ammo * self.base_dmg
        self.current_ammo = 0
        return damage

    def refill(self, ammo_amount):
        missing_ammo = self.max_ammo - self.current_ammo
        if ammo_amount - missing_ammo > 0:
            self.current_ammo = self.max_ammo
            return ammo_amount - missing_ammo
        else:
            self.current_ammo += ammo_amount
            return 0
    
    def get_type(self):
        print(self.type)

    def get_status(self):
        params = [self.type, self.current_ammo, self.base_dmg, self.current_ammo * self.base_dmg]
        print("Type {}, Ammo: {}, Base Damage: {}, All Damage: {}".format(*params))


class Carrier(object):
    def __init__(self, store_of_ammo, health_points):
        self.store_of_ammo = store_of_ammo
        self.health_points = health_points
        self.aircrafts = []

    def addAircraft(self, Aircraft):
        self.aircrafts.append({"aircraft": Aircraft, "priority": 1 if Aircraft.type == "F35" else 2})

    def fill(self):
        if self.store_of_ammo == 0: 
            raise ValueError("No ammo left")
        aircrafts_ordered_by_priority = sorted(self.aircrafts, key=lambda k: k["priority"])
        for aircraft in aircrafts_ordered_by_priority:
            self.store_of_ammo = aircraft["aircraft"].refill(self.store_of_ammo)
        
    def fight(self, enemy_carrier):
        total_damage = 0
        for aircraft in self.aircrafts:
            total_damage += aircraft["aircraft"].current_ammo * aircraft["aircraft"].base_dmg
        enemy_carrier.health_points -= total_damage

    def get_status(self):
        pass

F16 = Aircraft("F16", 8, 30)
F35 = Aircraft("F35", 12, 50)

hajo1 = Carrier(1000, 500)
hajo1.addAircraft(deepcopy(F16))
hajo2 = Carrier(200, 300)
hajo2.addAircraft(deepcopy(F35))

hajo1.fill()
hajo1.fight(hajo2)
print(hajo2.health_points)

