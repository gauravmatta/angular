import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
@Component({
    selector:'app',
    template: '{{ name }}'
})
class HelloAngular
{
    name: string;
    constructor(){
        this.name = 'Hello';
    }
}
bootstrap(HelloAngular,[]);