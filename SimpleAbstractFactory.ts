/*
  Simple abstract factory pattern:
  Concrete factories are implemented with factory methods
*/
/*
  Простая абстрактная фабрика
  Конкретные фабрики используют фабричные методы
*/

// Категории "Продуктов"

abstract class AbstractDog {
  type: string
  color: string
}

abstract class AbstractCat {
  type: string
  color: string
}

class WhiteDog extends AbstractDog {
  type: 'Dog'
  color: 'White'
}

class WhiteCat extends AbstractCat {
  type: 'Cat'
  color: 'White'
}

class BlackDog extends AbstractDog {
  type: 'Dog'
  color: 'Black'
}

class BlackCat extends AbstractCat {
  type: 'Cat'
  color: 'Black'
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

