import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Servicios
import { FifaService } from './services/fifa.service';
import { AppService } from './services/app.service';
//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewReglaComponent } from './components/new-regla/new-regla.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { FormFiltrosComponent } from './elements/form-filtros/form-filtros.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReglaComponent,
    LoginComponent,
    IndexComponent,
    FormFiltrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppService,
    FifaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
