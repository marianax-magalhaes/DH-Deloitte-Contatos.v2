import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  @Input("lt") tarefas!:Tarefa;

  constructor() { }

  ngOnInit(): void {
  }

}
