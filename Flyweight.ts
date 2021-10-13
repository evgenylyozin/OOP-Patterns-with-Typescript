/*
  Flyweight pattern
*/

/*
  Приспособленец 
*/

abstract class Flyweight {
  abstract Operation(extrinsicState: any): any
  abstract intrinsicState: any
}

class ConcreteFlyweightA extends Flyweight {
  Operation = (extrinsicState: any) => {
    console.log(extrinsicState, '+ \n', this.intrinsicState)
  }
  intrinsicState = 'Внутреннее состояние Приспособленца А'
}

class ConcreteFlyweightB extends Flyweight {
  Operation = (extrinsicState: any) => {
    console.log(extrinsicState, '+ \n', this.intrinsicState)
  }
  intrinsicState = 'Внутреннее состояние Приспособленца Б'
}

class FlyweightFactory {
  public GetFlyweight = (key: any): Flyweight => key in this._flyweightPool ? this._flyweightPool[key] : this._flyweightPool[key] = new key()
  private _flyweightPool: any = {}
}
const aFlyweightFactory = new FlyweightFactory()

const aFlyweightA = aFlyweightFactory.GetFlyweight(ConcreteFlyweightA)
const aFlyweightB = aFlyweightFactory.GetFlyweight(ConcreteFlyweightB)

aFlyweightA.Operation({type: 'Object', purpose: 'Extrinsic state object'})
aFlyweightB.Operation({type: 'Object', purpose: 'Extrinsic state object'})

const anotherFlyweightA = aFlyweightFactory.GetFlyweight(ConcreteFlyweightA)

anotherFlyweightA.Operation({type: 'Object', purpose: 'Another extrinsic state object'})


export default null