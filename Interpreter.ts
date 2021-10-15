/*
  Interpreter pattern
*/

/*
  Интерпретатор 
*/

type action = 'give' | 'take'

type quantity = 'one' | 'some' | 'many'

type item = 'candy' | 'chocolate' | 'bisquit'

const quantities: Map<quantity, number> = new Map([
  ['one',  1],
  ['some',  5],
  ['many',  20],
])

const itemsToTheirCountInContext: Map<item, string> = new Map([
  ['candy',  '_currentCC'],
  ['chocolate',  '_currentChC'],
  ['bisquit',  '_currentBC'],
])

class Context {
  constructor(){
    for(const item of itemsToTheirCountInContext.values()){
      this[item] = 0
    }
  }
  [index: string]: any
  public getResult = () => `Всего в коробке: ${this._currentCC} конфет, ${this._currentChC} шоколадок, ${this._currentBC} печенек.`
  public addOrRemoveSweets = (quantity: quantity = this.quantity, item: item = this.item, action: action = this.action) => {
    action === 'give' ? this.removeItems(quantity, item) : this.addItems(quantity, item)
  }
  private removeItems = (quantity: quantity, item: item) => {
    this[itemsToTheirCountInContext.get(item) as string] -= quantities.get(quantity) as number
  }
  private addItems = (quantity: quantity, item: item) => {
    this[itemsToTheirCountInContext.get(item) as string] += quantities.get(quantity) as number
  }
  public setLiteralValue = (type: string, value: any) => {
    this[type] = value
  }
}

abstract class Expression {
  abstract Interpret(Context: Context): void
}

class Action extends Expression {
  private value
  private context
  constructor(value: action, context: Context){
    super()
    this.value = value
    this.context = context
    this.Interpret(this.context)
  }
  Interpret = (Context: Context) => {
    Context.setLiteralValue('action', this.value)
  }
}

class Quantity extends Expression {
  private value
  private context
  constructor(value: quantity, context: Context){
    super()
    this.value = value
    this.context = context
    this.Interpret(this.context)
  }
  Interpret = (Context: Context) => {
    Context.setLiteralValue('quantity', this.value)
  }
}

class Item extends Expression {
  private value
  private context
  constructor(value: item, context: Context){
    super()
    this.value = value
    this.context = context
    this.Interpret(this.context)
  }
  Interpret = (Context: Context) => {
    Context.setLiteralValue('item', this.value)
  }
}

class Parser {
  constructor(stringToParse: string, context: Context){
    this._arrayToParse = stringToParse.split(" ")
    this._context = context
    this.parse()
  }
  private _arrayToParse
  private _context
  private parse = () => {
    new Action(this._arrayToParse[0] as action, this._context)
    new Quantity(this._arrayToParse[1] as quantity, this._context)
    new Item(this._arrayToParse[2] as item, this._context)
  }
}

const context = new Context()

new Parser('take some chocolate', context)
context.addOrRemoveSweets()
new Parser('give many bisquit', context)
context.addOrRemoveSweets()
new Parser('take one candy', context)
context.addOrRemoveSweets()

console.log(context.getResult()) // Всего в коробке: 1 конфет, 5 шоколадок, -20 печенек.

export default null