/*
  Abstract factory pattern where concrete factory is singleton
*/
/*
  Абстрактная фабрика, использующая паттерн синглтона
*/

const scope = () => {
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
  
  class AnimalsSingletonFactory {
    public static Instance = () => this._instance === 0 ? this._instance = new AnimalsSingletonFactory() : this._instance
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
  
  const AnimalsFactory = new WhiteAnimalsFactory()
  
  const ourCat = AnimalsFactory.CreateACat()
  const ourDog = AnimalsFactory.CreateADog()
}
