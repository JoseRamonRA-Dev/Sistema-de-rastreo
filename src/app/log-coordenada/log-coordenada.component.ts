import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MensajesService } from '../WebServices/mensajes.service';
import { Router } from '@angular/router';
import { RegistroCoordService } from '../WebServices/localizacion/registro-coord.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-log-coordenada',
  templateUrl: './log-coordenada.component.html',
  styleUrls: ['./log-coordenada.component.css']
})
export class LogCoordenadaComponent implements OnInit {

  latitud2: any = '';
  longitud2: any = '';
  data: FormGroup ;
  data_local: any = '';
  fecha2: any = '';
  correo2: any = '';


  constructor(private formBuilder: FormBuilder, private servicio: RegistroCoordService,
    private mensaje: MensajesService, private router: Router) {
    this.data = new FormGroup({
      'correo': new FormControl('', Validators.required),
      'latitud': new FormControl('', Validators.required),
      'longitud': new FormControl('', Validators.required),
      'tiempo': new FormControl('', Validators.required)
    });
  }


  getLocation() {
    this.servicio.getPosition().then(pos => {
      this.latitud2 = pos.lat;
      this.longitud2 = pos.lng;
    });
  }

  mostrarValores(){
    //To get the current user
    this.correo2 = localStorage.getItem("correo");

    //Current Date
    var now = new Date();
    this.fecha2 = now.toUTCString(); // convert date to a string in UTC timezone format
    
    return;
  }

  agreagrLocalizacion(): void {
    this.data_local = this.data.value;
    this.data_local.correo = this.correo2;
    this.data_local.latitud = this.latitud2;
    this.data_local.longitud = this.longitud2;
    this.data_local.tiempo = this.fecha2;
    console.log(this.data_local);
    if ((this.data_local.longitud != "") && (this.data_local.latitud != "") && (this.data_local.correo != "") && (this.data_local.tiempo != "")) {
      this.servicio.registrarLocalizacion(this.data_local).then((res) => {
        this.mensaje.mensaje('success', 'Localizacion agregada', 'Tu nueva ubicacion a sido agregada a tu rastreo personal.');
        this.router.navigate(['/inicio']);
      });
    } else {
      this.mensaje.mensaje('error', 'Error', 'A ocurrido un error al querer cargar su ubicacion.');
    }
  }

  ngOnInit(): void {
    this.mostrarValores();
    this.getLocation();
  }

}
