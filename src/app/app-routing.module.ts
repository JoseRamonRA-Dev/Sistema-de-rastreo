import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { LogCoordenadaComponent } from './log-coordenada/log-coordenada.component';
import {PaginabodyComponent} from './paginabody/paginabody.component';
import {PreguntasfComponent} from './preguntasf/preguntasf.component';
import {RegistroComponent} from './registro/registro.component';
import {RastreoPersonalComponent} from './rastreo-personal/rastreo-personal.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import {EstadoRiesgoComponent} from './estado-riesgo/estado-riesgo.component';

const routes: Routes = [
  { path: 'inicio', component: PaginabodyComponent  },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'preguntas', component: PreguntasfComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'log_coord', component: LogCoordenadaComponent },
  { path: 'rastreo_personal', component: RastreoPersonalComponent },
  { path: 'semaforo', component: SemaforoComponent },
  {path:'estado', component:EstadoRiesgoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
