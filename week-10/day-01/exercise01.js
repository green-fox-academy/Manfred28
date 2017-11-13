const Animal = function(sound) {
    this.sound = sound;
}
Animal.prototype.say = function() {
    console.log(this.sound);
} 

const dog = new Animal("woof");
dog.say();