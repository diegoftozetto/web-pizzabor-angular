import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { ReplaceCategoriaPipe } from './pipes/replace-categoria.pipe';
import { AreaRestritaComponent } from './components/area-restrita/area-restrita.component';

import { AppErrorHandler } from './app-error-handler';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardapioComponent,
    SobreComponent,
    ListaProdutosComponent,
    ReplaceCategoriaPipe,
    AreaRestritaComponent,
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
    TableModule,
    ButtonModule,
    AuthModule,
    ToastModule,
  ],
  providers: [
    MessageService,
    {
      provide: 'API_BASE_URL',
      useValue: 'http://localhost:3333/api',
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
