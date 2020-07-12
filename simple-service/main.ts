import {Component, Input, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Injectable()
class EmpService {
  private employees: any[];
  constructor() {
    this.employees=[
      {name: 'Jack', id:1},
      {name: 'Jill', id:2},
      {name: 'Humpty', id:3},
      {name: 'Dumpty', id:4},
      {name: 'Goofy', id:5}
    ];
  }
  getAll() {
    return this.employees;
  }
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  viewProviders:[EmpService],
  templateUrl : 'templates/app.tpl.html',
})
class StarterTemplate  {
  private name: string;
  private appId: string;
  private employees: any[];
  constructor (empService: EmpService) {
    this.name = 'Starter Templates are here!!';
    this.appId='This is the appId Value';
    this.employees=empService.getAll();
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
