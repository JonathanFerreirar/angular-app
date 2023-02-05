import { Component, OnInit } from '@angular/core';
import { Phrase } from '../shared/phrase.model';
import { Phrases } from './phrase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {
  public phrases: Phrase[] = Phrases;
  public instrucao: string = 'Translate the phrase';
  public resposta!: string;
  public rodada: number = 0;
  public rodadaFrase!: Phrase;

  constructor() {
    this.rodadaFrase = this.phrases[this.rodada];
  }
  ngOnInit(): void {}

  atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('Work');
      this.rodada++;
      this.rodadaFrase = this.phrases[this.rodada];
    } else {
      alert('No wokr');
    }
  }
}
