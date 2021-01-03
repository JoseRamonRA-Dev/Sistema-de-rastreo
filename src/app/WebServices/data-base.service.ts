import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import {Observable} from 'rxjs/Observable';
//import { bdInterface } from '../model/bdInterface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  usrCollection: AngularFirestoreCollection;
  //usrDoc: AngularFirestoreDocument<bdInterface>;
  //usuario: Observable<bdInterface>;
  //usuarios: Observable<bdInterface[]>;

  constructor(private afs:AngularFirestore) {
    //this.usrCollection = this.afs.collection('Usuarios', ref=>ref);
   }

   /*
  readBd():Observable<bdInterface[]>{
    this.usuarios = this.usrCollection.snapshotChanges().map(changes =>{
      return changes.map(action => {
        const data = action.payload.doc.data() as bdInterface;
        data.id = action.payload.doc.id;
        return data
      });
    });
    return this.usuarios
  }
*/
readBd(){
  return this.afs.collection('Usuarios').snapshotChanges();
}

readMaps(){
  return this.afs.collection('RastreoPersonal').snapshotChanges();
}

/*
  readOneBd(idUsr:string){
    this.usrDoc = this.afs.doc<bdInterface>(`Usuario/${idUsr}`);
    this.usuario = this.usrDoc.snapshotChanges().map(action=>{
      if(action.payload.exists === false){
        return false
      }else{
        const data = action.payload.data() as bdInterface;
        data.id = action.payload.id;
        return data;
      }
    });
    return this.usuario;
  }
  */
}

