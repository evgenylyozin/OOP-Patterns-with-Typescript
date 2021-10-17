/*
  Strategy pattern
*/
/*
  Стратегия
*/

class Composition {
  private _compositor
  constructor(compositor: Compositor){
    this._compositor = compositor
  }
  GetData = () => this._compositor.Compose()
}

abstract class  Compositor {
  abstract Compose(): number
}

class Compositor1 extends Compositor {
  Compose = () => 1
}

class Compositor2 extends Compositor {
  Compose = () => 2
}

class Compositor3 extends Compositor {
  Compose = () => 3
}

const Composition1 = new Composition(new Compositor1)
const Composition2 = new Composition(new Compositor2)
const Composition3 = new Composition(new Compositor3)

console.log(Composition1.GetData())
console.log(Composition2.GetData())
console.log(Composition3.GetData())

export default null