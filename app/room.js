/* global prompt:true */
'use strict';
//var prompt = require('sync-prompt').prompt;//

function Room(name, length, width, height, floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
}

Room.prototype.area = function(){   //there is an invisible link between an object and its prototype. It's called a prototype link.//

      return this.length * this.width;
};

Room.prototype.cost = function(){
  var roomCost = 0;
  var ftCost = 0;
  switch(this.floor){
    case 'carpet' : 
      ftCost = 15;
    break;
    case 'tile' :
      ftCost = 12;
    break;
    case 'wood' :
      ftCost = 10;
    break;
  }
  
  roomCost += ftCost * this.area();
  roomCost += ((this.height * this.length) + (this.height * this.width));

  return roomCost;

};



module.exports = Room;
