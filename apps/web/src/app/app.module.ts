import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MenubarModule} from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { SobreComponent } from './components/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardapioComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    TagModule,
    PanelModule,
  ],
  providers: [
    {
      provide: 'API_BASE_URL',
      useValue: 'http://localhost:3333/api',
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
