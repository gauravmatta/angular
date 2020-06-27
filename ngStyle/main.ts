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
  private cmpStyle: object;
  private fontSize: string;
  private cmpColor: string;
  constructor () {
    this.name = 'ngStyle';
    this.appId='This is the appId Value';
    this.fontSize='20px';
    this.cmpColor='blue';
    this.cmpStyle={
      'font-size': this.fontSize
    }
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
