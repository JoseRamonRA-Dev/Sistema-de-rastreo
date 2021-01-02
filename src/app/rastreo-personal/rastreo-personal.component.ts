import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../WebServices/mensajes.service';
import { Router } from '@angular/router';
import { RegistroCoordService } from '../WebServices/localizacion/registro-coord.service';
import { RegistrousrService } from '../WebServices/registro/registrousr.service'

@Component({
  selector: 'app-rastreo-personal',
  templateUrl: './rastreo-personal.component.html',
  styleUrls: ['./rastreo-personal.component.css']
})
export class RastreoPersonalComponent implements OnInit {

  correo2: any = '';

  constructor(private servicio: RegistroCoordService, private servicio2: RegistrousrService,
    private mensaje: MensajesService, private router: Router) {
  }

  mostrarValores() {
    //To get the current user
    this.correo2 = localStorage.getItem("correo");
    return;
  }

  rastreo_local = [
    {
      id: "",
      correo: "",
      latitud: "",
      longitud: "",
      tiempo: "",
    },
  ];
  rastreo: any;
  aux: any;
  rastreo_encontrados = [
    {
      id: "",
      correo: "",
      latitud: "",
      longitud: "",
      tiempo: "",
    },
  ];

  rastreo_encontrados2 = [
    {
      id: "",
      correo: "",
      latitud: "",
      longitud: "",
      diaL: "",
      diaN: "",
      mes: "",
      ano: "",
      hora: "",
      min: "",
      seg: ""
    },
  ];

  ngOnInit(): void {
    this.mostrarValores();
    console.log("CORREO: " + this.correo2);
    //Para mostrar los rastreo, obtenemos el arreglo
    this.servicio.rastreoPersonal().subscribe((data) => {
      this.rastreo = data.map((e) => {
        return {
          id: e.payload.doc.id,
          correo: e.payload.doc.data()["correo"],
          latitud: e.payload.doc.data()["latitud"],
          longitud: e.payload.doc.data()["longitud"],
          tiempo: e.payload.doc.data()["tiempo"],
        };
      });
      //obtenemos la variable de forma local
      this.rastreo_local = this.rastreo;
      console.log("Local: ", this.rastreo_local);

      let x = 0;
      for (let i = 0; i < this.rastreo_local.length; i++) {
        if (this.correo2 === this.rastreo_local[i]['correo']) {
          this.rastreo_encontrados[x++] = this.rastreo_local[i];
        }
      }

      console.log("Founded: ", this.rastreo_encontrados);

      /*
      for (let i = 0; i < this.rastreo_local.length; i++) {
        if (this.rastreo_encontrados[x].tiempo.substring(5, 16) > this.rastreo_encontrados[x + 1].tiempo.substring(5, 16)) {
          this.aux = this.rastreo_encontrados[x];
          this.rastreo_encontrados[x] = this.rastreo_encontrados[x + 1];
          this.rastreo_encontrados[x + 1] = this.aux;
        }
      }*/

      /*
      for (let x = 0; x < this.rastreo_encontrados.length; x++) {
        //while(i<this.rastreo_encontrados.length){
        this.rastreo_encontrados2[x].id = this.rastreo_encontrados[x].id;
        this.rastreo_encontrados2[x].correo = this.rastreo_encontrados[x].correo;
        this.rastreo_encontrados2[x].latitud = this.rastreo_encontrados[x].latitud;
        this.rastreo_encontrados2[x].longitud = this.rastreo_encontrados[x].longitud;
        this.rastreo_encontrados2[x].diaL = this.rastreo_encontrados[x].tiempo.substring(0, 3);
        this.rastreo_encontrados2[x].diaN = this.rastreo_encontrados[x].tiempo.substring(5, 7);
        this.rastreo_encontrados2[x].mes = this.rastreo_encontrados[x].tiempo.substring(8, 11);
        this.rastreo_encontrados2[x].ano = this.rastreo_encontrados[x].tiempo.substring(12, 16);
        this.rastreo_encontrados2[x].hora = this.rastreo_encontrados[x].tiempo.substring(17, 19);
        this.rastreo_encontrados2[x].min = this.rastreo_encontrados[x].tiempo.substring(20, 22);
        this.rastreo_encontrados2[x].seg = this.rastreo_encontrados[x].tiempo.substring(23, 26);
        console.log('llegue ' + x);
      }
      
      console.log("Founded2: ", this.rastreo_encontrados2);
    */
    });


    this.servicio2.obtenerUsuarios().subscribe((data) => {
      this.usaurios = data.map((e) => {
        return {
          id: e.payload.doc.id,
          apellidom: e.payload.doc.data()["apellidom"],
          apellidop: e.payload.doc.data()["apellidop"],
          calle: e.payload.doc.data()["calle"],
          contrasena: e.payload.doc.data()["contrasena"],
          correo: e.payload.doc.data()["correo"],
          estado: e.payload.doc.data()["estado"],
          estadosalud: e.payload.doc.data()["estadosalud"],
          municipio: e.payload.doc.data()["municipio"],
          nombre: e.payload.doc.data()["nombre"],
          numerocel: e.payload.doc.data()["numerocel"],
        };
      });
      //obtenemos la variable de forma local
      this.usaurios_local = this.usaurios;
      console.log("Usuarios: ", this.usaurios_local);

      let x = 0;
      for (let i = 0; i < this.usaurios_local.length; i++) {
        if (this.correo2 === this.usaurios_local[i]['correo']) {
          this.usaurio_encontrado[x++] = this.usaurios_local[i];
          break;
        }
      }
      console.log("Encontrado: ", this.usaurio_encontrado);
      localStorage.setItem("estado", this.usaurio_encontrado[0].estadosalud);
    });
  }

  usaurios: any;
  usaurios_local = [
    {
      id: "",
      correo: "",
      estadosalud: ""
    }
  ];
  usaurio_encontrado = [
    {
      id: "",
      correo: "",
      estadosalud: ""
    }
  ];

}
