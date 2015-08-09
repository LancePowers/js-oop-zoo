var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.openClose = false;
  this.animals = [];
}

Zoo.prototype.addAnimal = function (animal) {
  if(this.notDup(animal) !== true){
    return 'Already got one of them';
  } else if (this.isOpen() !== true){
    return 'Sorry Ray, The Fucking Zoo is Closed';
  } else if(this.isAnimal(animal)!== true){
    return 'That\'s not an animal.';
  } else{
    this.animals.push(animal);
  }
};

Zoo.prototype.notDup = function (animal) {
  if(this.animals.indexOf(animal) === -1){
    return true;
  } else {
    return false;
  }
};

Zoo.prototype.removeAnimal = function (animal) {
  var index = this.animals.indexOf(animal);
  if (this.isOpen() !== true){
    return 'Sorry Ray, The Fucking Zoo is Closed';
  } else {this.animals.splice(index,1)};
};

Zoo.prototype.isAnimal = function(animal){
  if(animal instanceof Animal){
    return true;
  } else {
    return false;
  }
}

Zoo.prototype.changeLocation = function (location) {
  this.location = location;
};

Zoo.prototype.open = function () {
  this.openClose = true;
};

Zoo.prototype.isOpen = function () {
  if (this.openClose === true){
    return true;
  } else {
    return false;
  }
};

module.exports = Zoo;
