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
  estado: any = '';
  correo: any = '';

  constructor(private registro: RegistrousrService, private mensaje: MensajesService) { }

  mostrarValores() {
    //To get the current user
    this.estado = localStorage.getItem("estado");
    this.correo = localStorage.getItem("correo");

    return;
  }

  ngOnInit(): void {
    this.mostrarValores();
  }

  verde() {
    var id = localStorage.getItem("id");
    //alert(id); 
    let estadosal = {};
    estadosal["estadosalud"] = 'verde';
    this.registro.actualizarEstado(id, estadosal);
    this.mensaje.mensaje('success', 'Estado Actualizado', 'Se actualizo correctamente tu estado de salud');
  }

  amarillo() {
    var id = localStorage.getItem("id");
    // alert(id); 
    let estadosal = {};
    estadosal["estadosalud"] = 'amarillo';
    this.registro.actualizarEstado(id, estadosal);
    this.mensaje.mensaje('success', 'Estado Actualizado', 'Se actualizo correctamente tu estado de salud');
  }

  rojo() {
    var id = localStorage.getItem("id");
    //alert(id); 
    let estadosal = {};
    estadosal["estadosalud"] = 'rojo';
    this.registro.actualizarEstado(id, estadosal);
    this.mensaje.mensaje('success', 'Estado Actualizado', 'Se actualizo correctamente tu estado de salud');
  }
}
