/*
  Observer pattern
*/

/*
  Наблюдатель 
*/

abstract class Subject {
  protected observers: {[index: string]: any} = {}
  AttachObserver = (Observer: Observer) => {
    this.observers[Observer.toString().concat(Math.random().toString())] = Observer
  }
  DetachObserver = (Observer: Observer) => {
    delete this.observers[Observer.toString()]
  }
  Notify = () => {
    for (const observer in this.observers){
      this.observers[observer].Update()
    }
  }
  abstract GetState(): number
  abstract SetState(newState: number): void
}

class ConcreteSubject extends Subject {
  private _state = 1
  GetState = () => this._state
  SetState = (newState: number) => {
    this._state = newState
    this.Notify()
  }
}

abstract class Observer {
  abstract Update(): void
}

class ConcreteObserver extends Observer {
  private _subject
  private _state
  constructor(subject: Subject){
    super()
    this._subject = subject
    this._state = subject.GetState()
  }
  Update = () => this._state = this._subject.GetState()
  GetState = () => this._state
}

const aConcreteSubject = new ConcreteSubject()
const aConcreteObserver1 = new ConcreteObserver(aConcreteSubject)
const aConcreteObserver2 = new ConcreteObserver(aConcreteSubject)
const aConcreteObserver3 = new ConcreteObserver(aConcreteSubject)
const aConcreteObserver4 = new ConcreteObserver(aConcreteSubject)

aConcreteSubject.AttachObserver(aConcreteObserver1)
aConcreteSubject.AttachObserver(aConcreteObserver2)
aConcreteSubject.AttachObserver(aConcreteObserver3)
aConcreteSubject.AttachObserver(aConcreteObserver4)

console.log('Состояние внутри субъекта: ', aConcreteSubject.GetState())
console.log('Состояние внутри наблюдателя 1: ', aConcreteObserver1.GetState())
console.log('Состояние внутри наблюдателя 2: ', aConcreteObserver2.GetState())
console.log('Состояние внутри наблюдателя 3: ', aConcreteObserver3.GetState())
console.log('Состояние внутри наблюдателя 4: ', aConcreteObserver4.GetState())

aConcreteSubject.SetState(123)

console.log('Состояние внутри субъекта: ', aConcreteSubject.GetState())
console.log('Состояние внутри наблюдателя 1: ', aConcreteObserver1.GetState())
console.log('Состояние внутри наблюдателя 2: ', aConcreteObserver2.GetState())
console.log('Состояние внутри наблюдателя 3: ', aConcreteObserver3.GetState())
console.log('Состояние внутри наблюдателя 4: ', aConcreteObserver4.GetState())

export default null