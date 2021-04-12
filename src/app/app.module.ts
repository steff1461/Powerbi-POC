import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SchematicDisplayComponent} from './schematic-display/schematic-display.component';
import {NonSecuredLinkComponent} from './non-secured-link/non-secured-link.component';

@NgModule({
  declarations: [
    AppComponent,
    SchematicDisplayComponent,
    NonSecuredLinkComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
