import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule,
    BaseRoutingModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class BaseModule { }
