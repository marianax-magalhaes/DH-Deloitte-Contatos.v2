import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() funfaCancelContato:EventEmitter<null> = new EventEmitter();
  
  novoContato:Contato = {
    nome:"",
    email: "",
    telefones: ["", ""]
  }

  constructor() { }

  funfa(){
    console.log("Pediu para cancelar");
    this.funfaCancelContato.emit()
  }

  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

}
