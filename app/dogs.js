/* jshint -W069 */
/* global prompt:true */
'use strict';
//Creating an object manually//

var prompt = require('sync-prompt').prompt;

var dogs = [];

var d1 = {};
d1.name = 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};

var d3 = {};
d3['name'] = 'lassy';
d3['age'] = 9;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a};

var name = 'name';
var age = 'age';
var d5 = {};
d5[name] = n;
d5[age] = a;

dogs.push(d1,d2,d3,d4,d5);

console.log('Dogs: ', dogs);
console.log(d1 instanceof Object);
console.log(d1 instanceof Dog);

// Creating Objects using a Constructor//

function Dog(name, age){
  this.name = name;
  this.age = age;
}


var d6 = new Dog('fluffy', 2);

console.log(d6);
console.log(d6 instanceof Object);
console.log(d6 instanceof Dog);

var option = prompt('(d)og or (q)uit: ');
while(option !== 'q'){
  var age = prompt('What is the age of the dog?: ');
  var name = prompt('What is the name of the dog?: ');
  var dog = new Dog(name, age);
  dogs.push(dog);

 option = prompt('(d)og or (q)uit: ');
  }

console.log('All Dogs: ', dogs);
