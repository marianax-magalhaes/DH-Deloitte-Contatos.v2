import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  //criando um emissor de eventos
 @Output() onAddContatoClick:EventEmitter<null> = new EventEmitter()
  //escolher o que mora no @angular/core e importar. por enquanto vai ser nulo


  constructor() { }

  ngOnInit(): void {
  }

  mostrarModalClick(){
    this.onAddContatoClick.emit();
    console.log("Clique para abrir o modal!")
  }

  sair(){
    console.log("Pedindo para sair");
    this.onAddContatoClick.emit()
  }

}
