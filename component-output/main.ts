import {Component, Input, Directive, Output, EventEmitter} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Directive({
selector:'[adder-auto]',
})
class AdderAuto{
  @Output() myevent: EventEmitter<string>;
  constructor(){
    this.myevent=new EventEmitter();
    setInterval(()=>{this.myevent.emit('myevename')},1000);
  }
}

@Component({
selector:'adder',
template:`
<p>Value: {{ value }}</p>
<button (click)="addOne()">Add +</button>
<h2>Using Emitter</h2>
<span adder-auto (myevent)="addOne($event)">EVENT: {{firedEvent}}</span>
`,
directives:[AdderAuto]
})
class Adder {
  private value:number;
  private firedEvent:string;
  constructor(){
    this.value = 0;
    this.firedEvent = '...' ;
  }

  addOne(event){
    this.value+=1;
    this.firedEvent=event+this.value;
  }
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  directives:[Adder]
})
class StarterTemplate  {
  private name: string;
  constructor () {
    this.name = 'Component Output';
  }
  hello(titlediv){
    console.log("hello");
    titlediv.textContent="Hello!";
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
