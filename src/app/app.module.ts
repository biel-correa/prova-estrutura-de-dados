import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PilhaPageComponent } from './pages/pilha-page/pilha-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilaPageComponent } from './pages/fila-page/fila-page.component';
import { FilaCircularPageComponent } from './pages/fila-circular-page/fila-circular-page.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { PresentationCardComponent } from './components/presentation-card/presentation-card.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PilhaGameComponent } from './components/games/pilha-game/pilha-game.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PilhaPageComponent,
    HomePageComponent,
    FilaPageComponent,
    FilaCircularPageComponent,
    BasePageComponent,
    PresentationCardComponent,
    CodeViewerComponent,
    PilhaGameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        themePath: 'assets/styles/github-dark-dimmed.css',
        languages: {
          python: () => import('highlight.js/lib/languages/python'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
