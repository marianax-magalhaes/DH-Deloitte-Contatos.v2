import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas: Tarefa[] = [
      {check: false,
       task: "comprar pão",
      },
      {check: false,
        task: "lavar tapete"
      },
      {check: true,
      task: "fazer unhas"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
