import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class RegistroCoordService {

  constructor(public serviciofirebase: AngularFirestore) { }

  //Getting the current position
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }

  /*Getting every array from RastreoPersonal*/
  rastreoPersonal() {
    return this.serviciofirebase.collection('RastreoPersonal').snapshotChanges();
  }

  /*Add new table in RastreoPersonal*/
  registrarLocalizacion(localizacion) {
    return this.serviciofirebase.collection('RastreoPersonal').add(localizacion);
  }

}
