/*
  Abstract factory pattern where concrete factory is singleton
*/
/*
  Абстрактная фабрика, использующая паттерн синглтона
  Инициализируется конкретная фабрика, другую использовать уже нельзя
*/

const scope = () => {
  // Категории "Продуктов"
  abstract class AbstractDog {
    abstract type: string
    abstract color: string
  }
  
  abstract class AbstractCat {
    abstract type: string
    abstract color: string
  }
  
  class WhiteDog extends AbstractDog {
    type = 'Dog'
    color = 'White'
  }
  
  class WhiteCat extends AbstractCat {
    type = 'Cat'
    color = 'White'
  }
  
  class BlackDog extends AbstractDog {
    type = 'Dog'
    color = 'Black'
  }
  
  class BlackCat extends AbstractCat {
    type = 'Cat'
    color = 'Black'
  }
  
  // Фабрики

  abstract class AbstractAnimalsFactory {
    abstract CreateACat(): {type: string, color: string}
    abstract CreateADog(): {type: string, color: string}
  }

  class AnimalsSingletonFactory {
    public static Instance = (ConcreteFactory?: AbstractAnimalsFactory) => this._instance === 0 ? this._instance = ConcreteFactory?.constructor() : this._instance
    protected constructor(){
      
    }
    private static _instance: any = 0

    
  }
  
  class WhiteAnimalsFactory extends AbstractAnimalsFactory {
    CreateACat = () => new WhiteCat()
    CreateADog = () => new WhiteDog()
  }
  
  class BlackAnimalsFactory extends AbstractAnimalsFactory {
    CreateACat = () => new BlackCat()
    CreateADog = () => new BlackDog()
  }
  
  const AnimalsFactory = AnimalsSingletonFactory.Instance(new BlackAnimalsFactory)
  
  const ourCat = AnimalsFactory.CreateACat()
  const ourDog = AnimalsFactory.CreateADog()

  console.log(AnimalsFactory) //Obj with methods to make black animals
  console.log(ourCat.color)
  console.log(ourDog.color)

  const AnimalsFactory2 = AnimalsSingletonFactory.Instance(new WhiteAnimalsFactory)
  console.log(AnimalsFactory2) //Still obj with methods to make black animals

  const AnimalsFactory3 = AnimalsSingletonFactory.Instance()
  console.log(AnimalsFactory3) //Still obj with methods to make black animals
}

scope()
