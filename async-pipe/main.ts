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
  private value: Promise<string>;
  private resolveValue: Function = null;
  constructor () {
    this.name = 'Async Pipe Example';
    this.value=new Promise<string>((resolve,reject) =>{
      this.resolveValue=resolve;
    });
    // console.log(this.value);
  }
  setValue(){
    setTimeout(()=>{
      this.resolveValue('Future Value');
    },1000)
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);