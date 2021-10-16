/*
  Memento pattern
*/

/*
  Хранитель 
*/

class SomeClass {
  private _memento: Memento | undefined = undefined
  private _state = 1
  CreateMemento = () => this._memento = new Memento(this._state)
  ChangeState = () => this._state += 1
  RestoreState = () => this._state = this._memento?.GetState()
  GetState = () => this._state
}

class Memento {
  private _state: any = undefined
  constructor(state: any){
    this._state = state
  }
  GetState = () => this._state
  SetState = (state: any) => {
    this._state = state
    return 1
  }
}

const aSomeClass = new SomeClass()
aSomeClass.CreateMemento()
console.log(aSomeClass.GetState())
aSomeClass.ChangeState()
console.log(aSomeClass.GetState())
aSomeClass.RestoreState()
console.log(aSomeClass.GetState())


export default null