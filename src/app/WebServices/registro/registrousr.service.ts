import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class RegistrousrService {

  constructor(public serviciofirebase:AngularFirestore) { }
  usuariosregistrados(){
    return this.serviciofirebase.collection('Usuarios').snapshotChanges();
  }
  
  registrarUsuario(usuario){
    return this.serviciofirebase.collection('Usuarios').add(usuario);
  }

  actualizarEstado(id, Record){
    this.serviciofirebase.doc('Usuarios/' + id).update(Record); 
  }

  obtenerUsuarios() {
    return this.serviciofirebase.collection('Usuarios').snapshotChanges();
  }

}
