function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

module.exports = Animal;
