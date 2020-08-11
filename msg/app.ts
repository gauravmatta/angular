import { bootstrap } from 'angular2/angular2';
import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'root',
    template: `
    <div>
        <h1>{{ title }}</h1>
    </div>`
})

class Root {
    title:string;
    constructor() { 
        this.title='Angular 2 Project'
    }
}

bootstrap(Root);