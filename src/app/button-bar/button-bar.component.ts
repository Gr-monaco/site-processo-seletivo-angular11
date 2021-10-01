import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent implements OnInit {

  @Output() emitterFormOpen = new EventEmitter<boolean>(); //mudar open para State é melhor?
  @Output() emitterTableState = new EventEmitter<boolean>();

  private variableToPass : boolean = true;

  constructor() { }

  functionToCall() {
    this.emitterFormOpen.emit(this.variableToPass);
  }

  functionToCloseTableList(){
    this.emitterTableState.emit(false);
  }

  ngOnInit(): void {
  }

}
