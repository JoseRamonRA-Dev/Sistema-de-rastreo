import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../WebServices/mensajes.service';
import { RegistrousrService } from '../WebServices/registro/registrousr.service';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
servicio: any; 
  constructor(private registro: RegistrousrService, private mensaje: MensajesService) { }

  ngOnInit(): void {
  }

  verde(){
    var id = localStorage.getItem("id");
    //alert(id); 
    let estadosal = {}; 
    estadosal["estadosalud"] = 'verde'; 
    this.registro.actualizarEstado(id, estadosal);
    this.mensaje.mensaje('success', 'Estado Actualizado', '');
  }

  amarillo(){
    var id = localStorage.getItem("id");
   // alert(id); 
    let estadosal = {}; 
    estadosal["estadosalud"] = 'amarillo'; 
    this.registro.actualizarEstado(id, estadosal); 
    this.mensaje.mensaje('success', 'Estado Actualizado', '');
  }

  rojo(){
    var id = localStorage.getItem("id");
   //alert(id); 
    let estadosal = {}; 
    estadosal["estadosalud"] = 'rojo'; 
    this.registro.actualizarEstado(id, estadosal); 
    this.mensaje.mensaje('success', 'Estado Actualizado', '');
  }
}
