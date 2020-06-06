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
  constructor () {
    this.name = 'ngIf Example';
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
