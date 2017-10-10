import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

import { GeocodeService } from './services/geocode.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GeocodeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
