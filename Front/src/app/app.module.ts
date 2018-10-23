import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';

import { ClientsService } from './services/clients.service';



@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    ClientsComponent,
    SalariesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
    ],
    providers: [
      ClientsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
