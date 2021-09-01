import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

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
    telefones: [""]
  }
  @Output()
  cs:ContatoService = new ContatoService();

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

  addTelefone():void{
    console.log("funciona");
    this.novoContato.telefones.push("");
  }

  salvar(){
    console.log("salvando");
    this.cs.addContato(this.novoContato);
    this.novoContato={
      nome:"",
      email:"",
      telefones:[""]
    }
  }

  removeTelefone(position:number):void{
    console.log("remove");
    this.novoContato.telefones.splice(position, 1);

  }
}
