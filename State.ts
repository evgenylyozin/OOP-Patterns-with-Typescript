/*
  State pattern
*/
/*
  Состояние
*/

class Context {
  private _CurrentState: State
  private _StateObjects: State[] = []
  constructor(...stateObjects: State[]){
    stateObjects.map((stateObject, i) => this._StateObjects[i] = stateObject)
    this._CurrentState = this._StateObjects[0]
  }
  GetData = () => this._CurrentState.Handle(this)
  SwitchState = (stateIndex: number) => this._CurrentState = this._StateObjects[stateIndex]
}

abstract class State {
  abstract Handle(context: Context): number
}

class ConcreteState1 extends State {
  Handle = (context: Context) => {
    context.SwitchState(1)
    return 1
  }
}

class ConcreteState2 extends State {
  Handle = (context: Context) => {
    context.SwitchState(2)
    return 2
  }
}

class ConcreteState3 extends State {
  Handle = (context: Context) => {
    context.SwitchState(0)
    return 3
  }
}
const aState1 = new ConcreteState1()
const aState2 = new ConcreteState2()
const aState3 = new ConcreteState3()

const aContext = new Context(aState1, aState2, aState3)

console.log(aContext.GetData()) // 1
console.log(aContext.GetData()) // 2
console.log(aContext.GetData()) // 3
console.log(aContext.GetData()) // 1
console.log(aContext.GetData()) // 2

export default null