var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation('Colorado Springs')
      expect(zoo.location).toEqual('Colorado Springs');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.openClose).toEqual(true);
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual(true);
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual(false);
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(zoo.addAnimal(lion)).toEqual('Sorry Ray, The Fucking Zoo is Closed');
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(lion);
      expect(zoo.animals).toEqual([lion]);
    });

    it('should only add instances of animals', function(){
      zoo.open();
      expect(zoo.addAnimal('car')).toEqual('That\'s not an animal.')
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.addAnimal(pig)).toEqual('Already got one of them');
      expect(zoo.animals).toEqual([pig]);

    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      expect(zoo.removeAnimal()).toEqual('Sorry Ray, The Fucking Zoo is Closed')
      zoo.open()
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      zoo.removeAnimal(pig);
      expect(zoo.animals).toEqual([lion]);
    });
  });
});
