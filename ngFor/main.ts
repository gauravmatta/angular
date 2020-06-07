import {Component, Input} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
selector:'example',
template:'<div>Hello Example {{ id }} </div>'
})
class Example {
  @Input() private id: string;
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
