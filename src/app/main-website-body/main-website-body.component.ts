import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-website-body',
  templateUrl: './main-website-body.component.html',
  styleUrls: ['./main-website-body.component.css']
})
export class MainWebsiteBodyComponent implements OnInit {

  cadastroVisivel : boolean = false;
  tabelaVisivel : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateValueCadastro(val: boolean) {
    this.cadastroVisivel = val;
  }

  updateValueTabela(val: boolean){
    this.tabelaVisivel = val;
  }
}
