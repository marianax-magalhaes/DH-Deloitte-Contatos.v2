import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  // @inupt para indicar que obteremos os dados atraves de um input, de fora da classe.
  // ! indica que ele será inicilizado foram desse ts
  @Input("rc") registro!:Contato;

  constructor() { }

  ngOnInit(): void {
  }

}
