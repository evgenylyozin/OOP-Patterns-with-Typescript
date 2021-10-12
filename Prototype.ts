/*
  Prototype pattern
*/

/*
  Прототип
*/

// Прототипы


abstract class AbstractCatPrototype {
  abstract CreateACat(): {type: string, color: string}
  static Clone = (): any => null
}

class WhiteCatPrototype extends AbstractCatPrototype {
  CreateACat = () => ({ type: 'Cat', color: 'White' })
  static Clone = () => new WhiteCatPrototype()
}

class BlackCatPrototype extends AbstractCatPrototype {
  CreateACat = () => ({ type: 'Cat', color: 'Black' })
  static Clone = () => new BlackCatPrototype()
}

// Клиент для примера

class CatBusiness {
  public constructor(prototype: any){
    this._prototype = prototype
  }
  private _prototype: any = null
  public getTheCat = () => this._prototype?.Clone()
}

const PrototypedWhiteCat = new CatBusiness(WhiteCatPrototype).getTheCat().CreateACat()
const PrototypedBlackCat = new CatBusiness(BlackCatPrototype).getTheCat().CreateACat()

console.log(PrototypedWhiteCat)
console.log(PrototypedBlackCat)

export default null