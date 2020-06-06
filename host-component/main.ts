import {Component, Input, Directive, ElementRef, Renderer} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Directive({
selector:'[simple-directive]',
host:{
  '(click)':'handleClick()',
  '[hidden]':'isHidden'
}
})
class SimpleDirective {
  @Input('aId') private appId: string;
  private isHidden:boolean = false;
  constructor(private elr: ElementRef, private renderer: Renderer){
    elr.nativeElement.style.background= 'green';
  }
  handleClick(){
    console.log("I was clicked");
  }
  public ngAfterViewInit() {
    this.renderer.setElementProperty(this.elr.nativeElement,'innerHTML',this.appId);
  }
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  directives:[SimpleDirective],
  templateUrl : 'templates/app.tpl.html',
})
class HostComponent  {
  private name: string;
  private appId: string;
  constructor () {
    this.name = 'Directive Host';
    this.appId='This is the appId Value';
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(HostComponent, []);
