import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MensajesService } from '../WebServices/mensajes.service';
import { Router } from '@angular/router';
import { RegistroCoordService } from '../WebServices/localizacion/registro-coord.service';

@Component({
  selector: 'app-log-coordenada',
  templateUrl: './log-coordenada.component.html',
  styleUrls: ['./log-coordenada.component.css']
})
export class LogCoordenadaComponent implements OnInit {

  latitud2: any;
  longitud2: any;
  lati_longi: FormGroup;
  data: FormGroup;
  lati_longi_local: any;
  data_local: any;

  constructor(private formBuilder: FormBuilder, private servicio: RegistroCoordService,
    private mensaje: MensajesService, private router: Router) {
    this.lati_longi = new FormGroup({
      'longitud': new FormControl('', Validators.required),
      'latitud': new FormControl('', Validators.required)
    });
    this.data = new FormGroup({
      'numerocel': new FormControl('', Validators.required),
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

  agreagrLocalizacion(): void {
    this.data_local = this.data.value;
    if ((this.data_local.longitud != "") && (this.data_local.latitud != "")) {
      this.servicio.registrarLocalizacion(this.data_local).then((res) => {
        this.mensaje.mensaje('success', 'Localizacion agregada', 'Tu nueva ubicacion a sido agregada a tu rastreo personal.');
        this.router.navigate(['/inicio']);
      });
    } else {
      this.mensaje.mensaje('error', 'Error', 'A ocurrido un error al querer cargar su ubicacion.');
    }
  }

  ngOnInit(): void {
    this.getLocation()
  }

}
