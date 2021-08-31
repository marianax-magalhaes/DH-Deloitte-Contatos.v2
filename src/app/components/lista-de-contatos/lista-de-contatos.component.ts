import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  //atributo contatos vai vir do model contato.ts 
  //necessario esse [] para avissar que é um array!
  contatos:Contato[];
    // criando nova prorpiedade que permitira a maniupulacao dos contatos.
  private cs:ContatoService = new ContatoService();


  constructor() { 
    this.contatos = this.cs.getContatos();
  }

  ngOnInit(): void {
  }

}
