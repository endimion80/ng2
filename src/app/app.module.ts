import { AccordComponent } from './accord/accord.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { appRoutes , appRouteProviders} from './app.routing' ;

@NgModule({
  declarations: [
    AppComponent , HeaderComponent,AccordComponent,ConsultantComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,appRoutes
  ],
  providers: [appRouteProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
