import {Component, Input} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
selector:'example',
template:'<div [style.color]="fontColor"> Hello Binding</div>'
})
class Example {
private fontColor: string;
constructor(){
  this.fontColor='blue';
}
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  directives:[Example],
  templateUrl : 'templates/app.tpl.html',
})
class StarterTemplate  {
  private name: string;
  private appId: string;
  constructor () {
    this.name = 'Starter Templates are here!!';
    this.appId='This is the appId Value';
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);