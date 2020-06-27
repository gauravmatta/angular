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
  private appId: string;
  private status: string;
  constructor () {
    this.name = 'Starter Templates are here!!';
    this.appId='This is the appId Value';
    this.status='success';
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
