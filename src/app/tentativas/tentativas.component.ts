import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coracao } from 'src/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  chances: Coracao[];

  @Input() public tentativas: number = 0;

  constructor(
    @Inject(APP_BASE_HREF) private _baseHref: string 
  ) {
    this.chances = []
  }

  ngOnInit(): void {
    for(let i = 0; i < this.tentativas; i++){
      this.chances.push(new Coracao(true,this._baseHref))
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["tentativas"].previousValue != this.tentativas)
      this.chances.map((_,index )=> this.chances[index].cheio = index < this.tentativas)
  }

}
