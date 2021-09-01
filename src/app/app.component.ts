import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrandoModal = true;
  title = 'contatos';

 

  showModal(){
    this.mostrandoModal = true;
    console.log("Eu te escutei, meu filho");
    this.mostrandoModal = true;
  }

  hideModal(){
    this.mostrandoModal = false;
  }
}
