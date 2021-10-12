/*
  Builder pattern
*/

/*
  Строитель
*/

class StringParser {
  public constructor(builder: any){
    this._builder = builder
  }
  parse = (string: string) => {
    for (const char of string) {
      const code = char.charCodeAt(0)
      if(code > 47 && code < 58) this._builder?.encodeNum(char)
      else if(code > 64 && code < 91) this._builder?.encodeCap(char)
      else if(code > 96 && code < 123) this._builder?.encodeOrd(char)
      else this._builder?.leaveBe(char)
    }
  }
  private _builder: any = null
}

type Char = string

abstract class BaseStringBuider {
  encodeNum = (number: Char) => undefined
  encodeCap = (char: Char) => undefined
  encodeOrd = (char: Char) => undefined
  leaveBe = (char: Char) => undefined
  abstract getBuiltString(): string
}

class SimpleStringBuilder extends BaseStringBuider {
  encodeCap = (char: Char) => {
    this._builtString = this._builtString.concat(char.toLowerCase())
    return undefined
  }
  encodeOrd = (char: Char) => {
    this._builtString = this._builtString.concat(char.toUpperCase())
    return undefined
  }
  getBuiltString = () => this._builtString
  private _builtString = ''
}

class MoreSophisticatedStringBuilder extends BaseStringBuider {
  encodeCap = (char: Char) => {
    this._builtString = this._builtString.concat(char.toLowerCase())
    return undefined
  }
  encodeOrd = (char: Char) => {
    this._builtString = this._builtString.concat(char.toUpperCase())
    return undefined
  }
  encodeNum = (number: Char) => {
    const num = parseInt(number)
    this._builtString = this._builtString.concat((num + 10).toString())
    return undefined
  }
  leaveBe = (char: Char) => {
    this._builtString = this._builtString.concat(char)
    return undefined
  }
  getBuiltString = () => this._builtString
  private _builtString = ''
}

// Пример использования

const TheSimpleStringBuilder = new SimpleStringBuilder()
const TheSimpleStringParser = new StringParser(TheSimpleStringBuilder)
TheSimpleStringParser.parse('123ABC*&^abc')
console.log(TheSimpleStringBuilder.getBuiltString()) // abcABC

const TheOtherStringBuilder = new MoreSophisticatedStringBuilder()
const TheOtherStringParser = new StringParser(TheOtherStringBuilder)
TheOtherStringParser.parse('123ABC*&^abc')
console.log(TheOtherStringBuilder.getBuiltString()) // 111213abc*&^ABC

export default null