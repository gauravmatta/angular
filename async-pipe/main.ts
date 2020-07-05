import {Component, Input, Pipe} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html'
})
class StarterTemplate  {
  private name: string;
  constructor () {
    this.name = 'Async Pipe Example';
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);