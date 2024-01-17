import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  // delare all components here
  declarations: [
    AppComponent,
    CompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
  ],

  // all modules that are needed for application
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  // services, 3rd party or any
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
