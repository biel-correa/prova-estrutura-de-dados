import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PilhaPageComponent } from './pages/pilha-page/pilha-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilaPageComponent } from './pages/fila-page/fila-page.component';
import { FilaCircularPageComponent } from './pages/fila-circular-page/fila-circular-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PilhaPageComponent,
    HomePageComponent,
    FilaPageComponent,
    FilaCircularPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
