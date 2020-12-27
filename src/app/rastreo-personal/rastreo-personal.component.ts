import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../WebServices/mensajes.service';
import { Router } from '@angular/router';
import { RegistroCoordService } from '../WebServices/localizacion/registro-coord.service';

@Component({
  selector: 'app-rastreo-personal',
  templateUrl: './rastreo-personal.component.html',
  styleUrls: ['./rastreo-personal.component.css']
})
export class RastreoPersonalComponent implements OnInit {

  correo2: any = '';

  constructor(private servicio: RegistroCoordService,
    private mensaje: MensajesService, private router: Router) {
  }

  mostrarValores() {
    //To get the current user
    this.correo2 = localStorage.getItem("correo");
    return;
  }

  empleados_local = [
    {
      id: "",
      correo: "",
      latitud: "",
      longitud: "",
      tiempo: "",
    },
  ];
  empleados: any;
  empleados_encontrados = [
    {
      id: "",
      correo: "",
      latitud: "",
      longitud: "",
      tiempo: "",
    },
  ];

  ngOnInit(): void {
    this.mostrarValores();
    console.log("CORREO: " + this.correo2);
    //Para mostrar los empleados, obtenemos el arreglo
    this.servicio.rastreoPersonal().subscribe((data) => {
      this.empleados = data.map((e) => {
        return {
          id: e.payload.doc.id,
          correo: e.payload.doc.data()["correo"],
          latitud: e.payload.doc.data()["latitud"],
          longitud: e.payload.doc.data()["longitud"],
          tiempo: e.payload.doc.data()["tiempo"],
        };
      });
      //obtenemos la variable de forma local
      this.empleados_local = this.empleados;
      console.log("Local: ", this.empleados_local);
      let x = 0;
      for (let i = 0; i < this.empleados_local.length; i++) {
        if (this.correo2 === this.empleados_local[i]['correo']) {
          this.empleados_encontrados[x++] = this.empleados_local[i];
          //x++;
        }
      }
      //this.empleados_encontrados.length = x;
      console.log("Founded: ", this.empleados_encontrados);
    });
  }

}
