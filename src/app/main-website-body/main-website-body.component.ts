import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';  

@Component({
  selector: 'main-website-body',
  templateUrl: './main-website-body.component.html',
  styleUrls: ['./main-website-body.component.css']
})
export class MainWebsiteBodyComponent implements OnInit {

  cadastroVisivel : boolean = false;
  tabelaVisivel : boolean = false;

  constructor( private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Site de programação - Home")
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  updateValueCadastro(val: boolean) {
    this.cadastroVisivel = val;
  }

  updateValueTabela(val: boolean){
    this.tabelaVisivel = val;
  }
}
