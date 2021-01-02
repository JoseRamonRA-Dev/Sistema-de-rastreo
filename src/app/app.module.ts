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
import { LogCoordenadaComponent } from './log-coordenada/log-coordenada.component';
import {RegistroCoordService} from './WebServices/localizacion/registro-coord.service';
import { RastreoPersonalComponent } from './rastreo-personal/rastreo-personal.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { EstadoRiesgoComponent } from './estado-riesgo/estado-riesgo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    FooterComponent,
    AcercadeComponent,
    PreguntasfComponent,
    PaginabodyComponent,
    RegistroComponent,
    LogCoordenadaComponent,
    RastreoPersonalComponent,
    SemaforoComponent,
    EstadoRiesgoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireDatabaseModule,
    AngularFirestoreModule, FormsModule, ReactiveFormsModule
  ],
  providers: [RegistrousrService, RegistroCoordService, AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
