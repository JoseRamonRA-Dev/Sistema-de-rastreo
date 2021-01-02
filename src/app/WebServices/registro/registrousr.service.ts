import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class RegistrousrService {
  static actualizarEstado(id: string, estadosal: string) {
    throw new Error('Method not implemented.');
  }

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

  /* updateProduct(product: Producto)
  {
    this.productList.update(product.$key, {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }
 */
}
