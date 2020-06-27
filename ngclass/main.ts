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
  private titleClasses:any;
  constructor () {
    this.name = 'NG Class Example';
    this.appId='This is the appId Value';
    this.titleClasses = {
      isActive: true,
      another: true
    }
}
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
