import {Component, Input, Directive} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Directive({
  selector:'[my-hello]'
})
class MyHello {
  constructor(){
    console.log("Hello Directive");
  }
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  directives:[MyHello],
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
