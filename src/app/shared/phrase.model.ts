export class Phrase {
  public frasePtBr!: string;
  public fraseEng!: string;

  constructor(fraseEng: string, frasePtBr: string) {
    this.fraseEng = fraseEng;
    this.frasePtBr = frasePtBr;
  }
}
//Or i can do this way
/* 
export class Phrase {
  

  constructor(public fraseEng: string, public frasePtBr: string) { }
}
*/
