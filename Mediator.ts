/*
  Mediator pattern
*/

/*
  Медиатор 
*/
class Mediator {
  private _colleagues: Colleague[] = []

  addAColleague = (Colleague: Colleague) => this._colleagues.push(Colleague)

  addOneToAnObject3AndObject4 = () => {
    this._colleagues[2].incrementCounter()
    this._colleagues[3].incrementCounter()
  }

  addOneToAnObject1AndObject2 = () => {
    this._colleagues[0].incrementCounter()
    this._colleagues[1].incrementCounter()
  }

  getCounters = () =>
  `Счетчик первого объекта: ${this._colleagues[0].getCurrentCounter()} \n
  Счетчик второго объекта: ${this._colleagues[1].getCurrentCounter()} \n
  Счетчик третьего объекта: ${this._colleagues[2].getCurrentCounter()} \n
  Счетчик четвертого объекта: ${this._colleagues[3].getCurrentCounter()}`

  getColleagues = () => this._colleagues
}

class  Colleague {
  private _mediator: Mediator | undefined = undefined
  private _counter: number = 0

  constructor(mediator: Mediator){
    this._mediator = mediator
    this._counter = 0
    this._mediator.addAColleague(this)
  }

  incrementCounter = () => {
    this._counter += 1
  }
  public getCurrentCounter = () => this._counter
}

const aMediator = new Mediator()
new Colleague(aMediator)
new Colleague(aMediator)
new Colleague(aMediator)
new Colleague(aMediator)

console.log(aMediator.getColleagues())

aMediator.addOneToAnObject1AndObject2()

console.log(aMediator.getCounters())

aMediator.addOneToAnObject3AndObject4()

console.log(aMediator.getCounters())



export default null