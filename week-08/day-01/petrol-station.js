'use strict';
// Create and object called car
//  - It should store its petrol level called petrolLevel
//  - It should store its petrol capacity called petrolCapacity
//  - It should have a refill(amount) method, that increments the petrol level,
//    than returns how much petrol it consumed from the given amount
//  - Initialize the petrol level to zero and the capacity to 50 
//
// Create an object called station
//  - It should store petrol amount called petrolStorage
//  - It should have a provide(car) method that calls the refill method of the car
//    with the stored petrol amount as a parameter, then decrement the used petrol
//  - Initialize the petrol amount to 3000

function Car () {
    this.petrolLevel = 0;
    this.petrolCapacity = 50;
    this.refill = function(refillAmount) {
        let petrolMissing =  this.petrolCapacity - this.petrolLevel;
        if (petrolMissing > refillAmount) {
            this.petrolLevel += refillAmount;
            return refillAmount
        } 
        else if (petrolMissing <= refillAmount) {
            this.petrolLevel += petrolMissing;
            return petrolMissing;
        }
    }
}

function Station () {
    this.petrolStorage = 3000;
    this.provide = function(car) {
        this.petrolStorage -= car.refill(this.petrolStorage)
    }
}


let car = new Car();
let station = new Station();







console.log(car.petrolLevel);
console.log(station.petrolStorage);

station.provide(car);

console.log(car.petrolLevel);
console.log(station.petrolStorage);