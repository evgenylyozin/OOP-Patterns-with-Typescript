/*
  Simple abstract factory pattern
*/
/*
  Простая абстрактная фабрика
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

// Фабрики

abstract class AbstractAnimalsFactory {
  abstract CreateACat(): {type: string, color: string}
  abstract CreateADog(): {type: string, color: string}
}

class WhiteAnimalsFactory extends AbstractAnimalsFactory {
  CreateACat = () => new WhiteCat()
  CreateADog = () => new WhiteDog()
}

class BlackAnimalsFactory extends AbstractAnimalsFactory {
  CreateACat = () => new BlackCat()
  CreateADog = () => new BlackDog()
}

const AnimalsFactory = new WhiteAnimalsFactory()

const ourCat = AnimalsFactory.CreateACat()
const ourDog = AnimalsFactory.CreateADog()

console.log(ourCat.color)
console.log(ourDog.color)

export default null