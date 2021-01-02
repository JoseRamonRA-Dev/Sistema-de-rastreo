import { Component, OnInit } from '@angular/core';
import {RegistrousrService} from '../WebServices/registro/registrousr.service';
import { MensajesService} from '../WebServices/mensajes.service';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {
  bandera1 = false;
  usuarios: any;
  nombre: any;
  apellidop: any;
  bandera2= false;
  constructor(private servicio: RegistrousrService, private mensaje: MensajesService) { }

  ngOnInit(): void {
  }

  iniciar(correo,contrasena){
    this.servicio.usuariosregistrados().subscribe((data) => {
      this.usuarios = data.map((e) => {
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()["nombre"],
          apellidop: e.payload.doc.data()["apellidop"],
          correo: e.payload.doc.data()["correo"],
          contra: e.payload.doc.data()["contrasena"], 
          cel: e.payload.doc.data()["numerocel"]
        };
      });
      for (let i = 0; i < this.usuarios.length; i++) {
             if((correo == this.usuarios[i]["correo"]) && (contrasena == this.usuarios[i]["contra"])) {
                this.bandera2 = true;
                this.nombre = this.usuarios[i]["nombre"];
                this.apellidop = this.usuarios[i]["apellidop"];
                localStorage.setItem("id", this.usuarios[i]["id"]);
                localStorage.setItem("correo", this.usuarios[i]["correo"]);
             }   
      }
         if(this.bandera2){
          this.mensaje.mensaje('success', 'BIENVENIDO', '');
          this.bandera1 = true;
         }else{
          this.mensaje.mensaje('error', 'ACCESO DENEGADO', 'Usuario no registrado en la base de datos');
         }
    });
  }
  cerrar() {
    this.bandera1 = false;
    this.mensaje.timer(2000,'CERRANDO SESIÓN');
    localStorage.setItem("id","");
    localStorage.setItem("correo","");
  }
}
