import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import {PaginabodyComponent} from './paginabody/paginabody.component';
import {PreguntasfComponent} from './preguntasf/preguntasf.component';
import {RegistroComponent} from './registro/registro.component';

const routes: Routes = [
  { path: 'inicio', component: PaginabodyComponent  },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'preguntas', component: PreguntasfComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
