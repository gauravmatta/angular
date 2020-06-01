import {Component, Input} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
})
class StarterTemplate  {
  private name: string;
  private usernameValue:string;
  constructor () {
    this.name = 'Local Variable';
  }
  setTitle(elm){
      elm.textContent="Hello";
  }

  setUsername(value){
    this.usernameValue=value;
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
