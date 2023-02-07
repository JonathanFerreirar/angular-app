import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { Phrase } from '../shared/phrase.model';
import { Phrases } from './phrase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit, OnDestroy {
  public phrases: Phrase[] = Phrases;
  public instrucao: string = 'Translate the phrase';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase!: Phrase;
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();
  constructor() {
    this.atualizaRodada();
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    console.log('Componente foi destruido');
  }

  atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta.toUpperCase()) {
      alert('Work');
      this.rodada++;
      this.progresso = this.progresso + 100 / this.phrases.length;
      if (this.rodada === 4) {
        this.encerrarJogo.emit('Vitoria');
      }
      this.atualizaRodada();
    } else {
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('Derrota');
      }
    }
  }

  public atualizaRodada(): void {
    //definindo a frase da rodada
    this.rodadaFrase = this.phrases[this.rodada];
    //limpandando a frase da rodada
    this.resposta = '';
  }
}
