/*
  Singleton pattern. Only one instance of a class is available.
*/
/*
  Синглтон. Только 1 объект от конкретного класса доступен приложению.
*/

// Категории "Продуктов"
abstract class AbstractAnimal {
  abstract type: string
  abstract color: string
}

class WhiteDog extends AbstractAnimal {
  type = 'Dog'
  color = 'White'
}

class WhiteCat extends AbstractAnimal {
  type = 'Cat'
  color = 'White'
}

class BlackDog extends AbstractAnimal {
  type = 'Dog'
  color = 'Black'
}

class BlackCat extends AbstractAnimal {
  type = 'Cat'
  color = 'Black'
}

// Синглтон

class AnimalSingleton {
  public static Instance = (ConcreteAnimalConstructor?: AbstractAnimal) => this._instance === 0 ? this._instance = ConcreteAnimalConstructor?.constructor() : this._instance
  protected constructor(){}
  private static _instance: any = 0
}

let ourAnimal = AnimalSingleton.Instance(new BlackCat)

console.log(ourAnimal) // Black cat
ourAnimal = AnimalSingleton.Instance(new WhiteDog)
ourAnimal = AnimalSingleton.Instance()
console.log(ourAnimal) // Still black cat

export default null