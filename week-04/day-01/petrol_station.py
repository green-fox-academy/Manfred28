# Petrol Station

# Create Station and Car classes
# Station
# gas_amount
# refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gas_amount
# Car
# gas_amount
# capacity
# create constructor for Car where:
# initialize gas_amount -> 0
# initialize capacity -> 100


class Station(object):
    gas_amount = 1000

    def refill(self, car):
        self.gas_amount -= car.capacity
        car.gas_amount += car.capacity


class Car(object):
    gas_amount = 0
    capacity = 100


