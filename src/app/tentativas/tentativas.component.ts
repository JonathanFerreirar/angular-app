import { Component, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
})
export class TentativasComponent implements OnChanges {
  @Input() public tentativas: number;
  public hearts: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  ngOnChanges() {
    this.updateHearts();
  }

  /**
   * Updates the hearts based on the number of attempts
   */
  private updateHearts(): void {
    if (this.tentativas !== this.hearts.length) {
      const index = this.hearts.length - this.tentativas;
      this.hearts[index - 1].cheio = false;
    }
  }
}
