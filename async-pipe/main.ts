import {Component, Input, Pipe} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {DatePipe} from 'angular2/src/common/pipes';

@Pipe({
  name: 'pixelPipe'
})
class SimplePipe {
  transform(input){
    return input + 'px';
  }
}

@Pipe({
  name: 'unit'
})
class UnitPipe {
  transform(input,arg1,arg2){
    let unit = arg1 || 'px';
    arg2 = arg2 || '5';
    return input + unit + arg2;
  }
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  pipes:[SimplePipe,UnitPipe]
})
class StarterTemplate  {
  private name: string;
  private value: string;
  private today: Date;
  private todayInside;
  private students:any[];
  constructor () {
    const unitPipe = new UnitPipe();
    const datePipe = new DatePipe();
    this.name = 'Basic Pipe Example';
    this.value= unitPipe.transform('12','%','10');
    this.today=new Date();
    this.todayInside=datePipe.transform(new Date(),'MMMh');
    this.students=[
      {id:1, name:'Tom'},
      {id:2, name:'Jerry'},
      {id:3, name:'Goofy'},
      {id:4, name:'Flinstone'},
      {id:5, name:'Shabby'}
    ];
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);