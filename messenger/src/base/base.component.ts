import { Component } from '@angular/core';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})

export class BaseComponent {
  title: string;
  constructor(){
    this.title = "I am base Component";
  }
}
