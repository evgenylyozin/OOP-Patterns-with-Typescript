/*
  Factory method pattern
*/

/*
  Фабричный метод
*/

// Категории "Продуктов"
abstract class AbstractAnimal {
  abstract type: string
  abstract color: string
}

class WhiteDog extends AbstractAnimal {
  type = "Dog"
  color = "White"
}

class WhiteCat extends AbstractAnimal {
  type = "Cat"
  color = "White"
}

class BlackDog extends AbstractAnimal {
  type: 'Dog' = "Dog"
  color: 'Black' = "Black"
}

class BlackCat extends AbstractAnimal {
  type: 'Cat' = "Cat"
  color: 'Black' = "Black"
}

// Классы с фабричным методом

abstract class AbstractCreateAnAnimal {
  abstract CreateAnAnimal(): {type: string, color: string}
}

class CreateWhiteDog extends AbstractCreateAnAnimal {
  CreateAnAnimal = () => new WhiteDog()
}
class CreateWhiteCat extends AbstractCreateAnAnimal {
  CreateAnAnimal = () => new WhiteCat()
}
class CreateBlackDog extends AbstractCreateAnAnimal {
  CreateAnAnimal = () => new BlackDog()
}
class CreateBlackCat extends AbstractCreateAnAnimal {
  CreateAnAnimal = () => new BlackCat()
}

let dog = new CreateWhiteDog().CreateAnAnimal()

console.log(dog)

dog = new CreateBlackDog().CreateAnAnimal()

console.log(dog)

export default null