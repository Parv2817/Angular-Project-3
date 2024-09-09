import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderPatparvmComponent } from './header-patparvm/header-patparvm.component';
import { FooterPatparvmComponent } from './footer-patparvm/footer-patparvm.component';
import { AcePatparvmComponent } from './ace-patparvm/ace-patparvm.component';
import { RouterModule, Routes } from '@angular/router';
import { CardPatparvmService } from './card-patparvm.service';
import { KingPatparvmComponent } from './king-patparvm/king-patparvm.component';
import { QueenPatparvmComponent } from './queen-patparvm/queen-patparvm.component';
import { JackPatparvmComponent } from './jack-patparvm/jack-patparvm.component';

const approutes: Routes = [
  {path: "", component: AcePatparvmComponent},
  {path: "ace", component: AcePatparvmComponent},
  {path: "king", component: KingPatparvmComponent},
  {path: "queen", component: QueenPatparvmComponent},
  {path: "jack", component: JackPatparvmComponent} ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderPatparvmComponent,
    FooterPatparvmComponent,
    AcePatparvmComponent,
    KingPatparvmComponent,
    QueenPatparvmComponent,
    JackPatparvmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CardPatparvmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
