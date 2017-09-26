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
