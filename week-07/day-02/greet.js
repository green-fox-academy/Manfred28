'user strict';

const greeter = greeting => name => `${greeting}, dear ${name}`

helloGreeter = greeter("Hello");
console.log(helloGreeter("Zoli"));

goodbyeGreeter = greeter("GoodBye");
console.log(goodbyeGreeter("Zoli"));
