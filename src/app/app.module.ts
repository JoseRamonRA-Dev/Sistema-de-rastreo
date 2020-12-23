import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { FooterComponent } from './footer/footer.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PreguntasfComponent } from './preguntasf/preguntasf.component';
import { PaginabodyComponent } from './paginabody/paginabody.component';
import { RegistroComponent } from './registro/registro.component';

import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {environment} from '../environments/environment'
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrousrService} from './WebServices/registro/registrousr.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    FooterComponent,
    AcercadeComponent,
    PreguntasfComponent,
    PaginabodyComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireDatabaseModule,
    AngularFirestoreModule, FormsModule, ReactiveFormsModule
  ],
  providers: [RegistrousrService,AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
