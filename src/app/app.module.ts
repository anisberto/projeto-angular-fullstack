import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './views/pages/footer/footer.component';
import { TopbarComponent } from './views/pages/topbar/topbar.component';
import { MainComponent } from './views/pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
