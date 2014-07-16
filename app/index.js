/* global prompt:true */
'use strict';
// var prompt = requre('sync-prompt').prompt; //

var Room = require('./room.js');
var House = require('./house.js');

var r1 = new Room('living', 10, 12, 10, 'carpet', 'aqua');
var r2 = new Room('dining', 8, 10, 10, 'tile', 'green');
var r3 = new Room('bedroom', 9, 11, 10, 'wood', 'orange');

//console.log(r1,r2,r3);

var h1 = new House('M-4', 'brick', 1993);
var h2 = new House('M-5', 'stone', 1985);
var h3 = new House('M-6', 'straw', 1832);

h1.rooms.push(r1,r2,r3);


//var h1Area = 0;
//for(var a = 0; a < h1.rooms.length; a++){
//  h1Area += h1.rooms[a].area(); 
//}

//console.log(h1, h2, h3);

console.log('The area of room 1 is: ', r1.area());
console.log('The cost of room 1 is: $', r1.cost());
console.log('The cost of room 2 is: $', r2.cost());
console.log('The cost of room 3 is: $', r3.cost());
console.log('The total area of house 1 is: ', h1.area());
console.log('The cost of house 1 is: $', h1.cost());

//h1.area();
