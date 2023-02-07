export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string = '../../assets/img/full.png',
    public urlCoracaoVazio: string = '../../assets/img/empty.png'
  ) {}

  public exibeCoracao(): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}
