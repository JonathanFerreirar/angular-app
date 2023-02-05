import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css'],
})
export class ProgressoComponent implements OnInit {
  ngOnInit(): void {}

  public progressoNumber: number = 50;

  public progresso: string = `width: ${this.progressoNumber}%`;
}
