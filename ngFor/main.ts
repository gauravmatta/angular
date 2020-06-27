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
  private nums: number[];
  private users: any[];
  private headers: any[];
  constructor () {
    this.name = 'ngFor Directive';
    this.nums = [1,2,3,4];
    this.users=[
      {name: 'Tom', id:'1', isActive:false},
      {name: 'Kim', id:'2', isActive:true},
      {name: 'John', id:'3', isActive:false}
    ]
    this.headers= Object.keys(this.users[0]);
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
