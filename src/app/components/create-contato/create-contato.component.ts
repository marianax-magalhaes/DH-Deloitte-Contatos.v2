import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() funfaCancelContato:EventEmitter<null> = new EventEmitter();

  constructor() { }

  funfa(){
    console.log("Pediu para cancelar");
    this.funfaCancelContato.emit()
  }
  ngOnInit(): void {
  }

}
