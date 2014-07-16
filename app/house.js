/* global prompt:true */
//var prompt = require('sync-prompt').prompt;
'use strict';


function House(name, material, year){
  this.name = name;
  this.material = (material);
  this.year = parseInt(year);
  this.rooms = [];
}


House.prototype.area = function(){ //there is an invisible link between an object and its prototype. It's called a prototype link.//
  
  var houseArea = 0;
  for(var a = 0; a < this.rooms.length; a++){
    houseArea += this.rooms[a].area(); 
  }
  return houseArea;
};

House.prototype.cost = function(){
  var houseCost = 0;
  for(var b = 0; b < this.rooms.length; b++){
    houseCost += this.rooms[b].cost();
  }
  return houseCost;
};

module.exports = House;
