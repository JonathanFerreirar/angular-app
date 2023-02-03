import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
})
export class TentativasComponent implements OnInit {
  public coracaoVazio: string = '../../assets/img/empty.png';
  public coracaoCheio: string = '../../assets/img/full.png';

  constructor() {}
  ngOnInit(): void {}
}
