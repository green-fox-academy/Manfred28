'use strict';

const Rectangle = function(a, b) {
    this.a = a;
    this.b = b;
}

Rectangle.prototype.getArea = function() {
    return this.a * this.b;
}

Rectangle.prototype.getCircumferencce = function() {
    return (this.a + this.b) * 2;
}

const rect = new Rectangle(5, 5);
console.log(rect.getArea());
console.log(rect.getCircumferencce());
