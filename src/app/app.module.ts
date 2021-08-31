import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDeTarefasComponent } from './components/lista-de-tarefas/lista-de-tarefas.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { InputTarefasComponent } from './components/input-tarefas/input-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeTarefasComponent,
    TarefasComponent,
    InputTarefasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
