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
  private isReady:boolean;
  constructor () {
    this.name = 'ngIf Example';
    this.isReady=true;
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
