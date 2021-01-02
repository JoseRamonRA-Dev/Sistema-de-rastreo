import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService} from '../WebServices/mensajes.service';
import {DataBaseService} from '../WebServices/data-base.service';

@Component({
  selector: 'app-estado-riesgo',
  templateUrl: './estado-riesgo.component.html',
  styleUrls: ['./estado-riesgo.component.css']
})
export class EstadoRiesgoComponent implements OnInit {
  //this.mensaje.mensaje('success', 'Registro correcto', 'Puedes iniciar sesion cuando  quieras, solamente ingresando tu correo y contraseña que acabas de ingresar en el registro');
  correo_llave:string;
  datos_prueba:any;

  longitud_usr_logg:string;
  latitud_usr_logg:string;

  usrRiesgo0:string;
  usrRiesgo1:string;
  usrRiesgo2:string;
  usrRiesgo3:string;
  usrRiesgo4:string;
  usrRiesgo5:string;
  usrRiesgo6:string;
  usrRiesgo7:string;
  usrRiesgo8:string;
  usrRiesgo9:string;

  longitud_usrRiesgo0:string;
  longitud_usrRiesgo1:string;
  longitud_usrRiesgo2:string;
  longitud_usrRiesgo3:string;
  longitud_usrRiesgo4:string;
  longitud_usrRiesgo5:string;
  longitud_usrRiesgo6:string;
  longitud_usrRiesgo7:string;
  longitud_usrRiesgo8:string;
  longitud_usrRiesgo9:string;

  latitud_usrRiesgo0:string;
  latitud_usrRiesgo1:string;
  latitud_usrRiesgo2:string;
  latitud_usrRiesgo3:string;
  latitud_usrRiesgo4:string;
  latitud_usrRiesgo5:string;
  latitud_usrRiesgo6:string;
  latitud_usrRiesgo7:string;
  latitud_usrRiesgo8:string;
  latitud_usrRiesgo9:string;

  //buscar:string;
  //Vaiables Usuario
  usuarios:any;
  usr_nombre:string;
  usr_apellidop:string;
  usr_apellidom:string;
  usr_calle:string;
  usr_contrasena:string;
  usr_contra2:string;
  usr_correo:string="";
  usr_estado:string;
  usr_estadoSalud:string;
  usr_municipio:string;
  usr_cel:string;

  usr_local = [
    {
      id: "",
      nombre: "",
      apellidop: "",
      apellidom: "",
      calle: "",
      contra2: "",
      contrasena: "",
      correo: "",
      estado: "",
      estadosalud: "",
      municipio: "",
      numerocel:"",
    },
  ];

  //Variables rastreo
  rastreos:any;
  correo:string;
  latitud:number; //~~~~~~~~~~~~~~~~~~~~~~String??
  longitud:number; //~~~~~~~~~~~~~~~~~~~~~String??
  tiempo:string;

  rastreo_local = [
    {
      id: "",
      correo: "",
      latitud: "",
      longitud: "",
      tiempo: "",
    },
  ];

  constructor(private mensaje: MensajesService, private router:Router, private DataBaseService:DataBaseService) { }

  ngOnInit(): void {
    var id_usr_logg = localStorage.getItem("id");
    console.log("Id Usuario Loggeado: ", id_usr_logg);
    //~~~~~~~~~~~~~~~~~~USUARIO~~~~~~~~~~~~~~~~~~~~~~~~~
    this.DataBaseService.readBd().subscribe((data)=>{
      this.usuarios = data.map((e)=>{
        return{
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()["nombre"],
          apellidop: e.payload.doc.data()["apellidop"],
          apellidom: e.payload.doc.data()["apellidom"],
          calle: e.payload.doc.data()["calle"],
          contra2: e.payload.doc.data()["contra2"],
          contrasena: e.payload.doc.data()["contrasena"],
          correo: e.payload.doc.data()["correo"],
          estado: e.payload.doc.data()["estado"],
          estadosalud: e.payload.doc.data()["estadosalud"],
          municipio: e.payload.doc.data()["municipio"],
          numerocel: e.payload.doc.data()["numerocel"],
        };
      });
      //obtenemos la variable de forma local
      this.usr_local = this.usuarios;
      console.log("Local: ", this.usr_local);
      console.log(this.usuarios);
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Obtenemos correo de usuario loggeado ~~~~~~~~~~~~~~~~
      for(let i =0; i<this.usr_local.length; i++){
        if(id_usr_logg === this.usr_local[i]['id']){
          this.correo_llave = this.usr_local[i]['correo'];
          console.log("Correo usuario loggeado 2: ",  this.usr_local[i]['correo']);
        }
        console.log("Correo usuario loggeado: ", this.correo_llave);
        //console.log("prueba: ",this.usr_local[i]['correo']);
      }
     //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Obtenemos correo de usario en riesgo ~~~~~~~~~~~~~~~~~~~~~~~~~
     for(let i=0; i<this.usr_local.length; i++){
       if(this.usr_local[i]['estadosalud'] === 'amarillo'){
         let vusr = 'usrRiesgo'+ i;
          console.log("usuario en riesgo: ", vusr);
          if(vusr === 'usrRiesgo0'){
            this.usrRiesgo0 = this.usr_local[i]['correo'];
          }else if(vusr === 'usrRiesgo1'){
            this.usrRiesgo1 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 1: ", this.usrRiesgo1);
          }else if(vusr === 'usrRiesgo2'){
            this.usrRiesgo2 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 2: ", this.usrRiesgo2);
          }else if(vusr === 'usrRiesgo3'){
            this.usrRiesgo3 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 3: ", this.usrRiesgo3);
          }else if(vusr === 'usrRiesgo4'){
            this.usrRiesgo4 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 4: ", this.usrRiesgo4);
          }else if(vusr === 'usrRiesgo5'){
            this.usrRiesgo5 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 5: ", this.usrRiesgo5);
          }else if(vusr === 'usrRiesgo6'){
            this.usrRiesgo6 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 6: ", this.usrRiesgo6);
          }else if(vusr === 'usrRiesgo7'){
            this.usrRiesgo7 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 7: ", this.usrRiesgo7);
          }else if(vusr === 'usrRiesgo8'){
            this.usrRiesgo8 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 8: ", this.usrRiesgo3);
          }else if(vusr === 'usrRiesgo9'){
            this.usrRiesgo9 = this.usr_local[i]['correo'];
            console.log("usrRiesgo 9: ", this.usrRiesgo9);
          }
       }
     }
    });
//~~~~~~~~~~~~~~RASTREO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.DataBaseService.readMaps().subscribe((data)=>{
      this.rastreos = data.map((e)=>{
        return{
          id: e.payload.doc.id,
          correo: e.payload.doc.data()["correo"],
          latitud: e.payload.doc.data()["latitud"],
          longitud: e.payload.doc.data()["longitud"],
          tiempo: e.payload.doc.data()["tiempo"],
        };
      });
      //obtenemos la variable de forma local
      this.rastreo_local = this.rastreos;
      console.log("Local: ", this.rastreo_local);
      console.log(this.rastreos);

      console.log("Dentro de Rastreoo: ", this.correo_llave);
      for(let i=0; i<this.rastreo_local.length; i++){
          if(this.correo_llave ===  this.rastreo_local[i]['correo']){
            this.longitud_usr_logg = this.rastreo_local[i]['longitud']; //longitud_usr_logg <- string before number
            this.latitud_usr_logg = this.rastreo_local[i]['latitud']; 
          }
      }
      console.log("latitud Usuario loggeado: ", this.latitud_usr_logg);
      console.log("longitud usuario loggeado: ", this.longitud_usr_logg);

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~obtener correo de usr en riesgo~~~~~~~~~~~~~~~~~~
      if(this.usrRiesgo0 != null){
        for(let i=0; i<this.rastreo_local.length; i++){
          if(this.usrRiesgo0 ===  this.rastreo_local[i]['correo']){
            this.longitud_usrRiesgo0 = this.rastreo_local[i]['longitud']; //longitud_usr_logg <- string before number
            this.latitud_usrRiesgo0 = this.rastreo_local[i]['latitud']; 
          }
        }
      }else if (this.usrRiesgo1 != null) {
        for(let i=0; i<this.rastreo_local.length; i++){
          if(this.usrRiesgo1 ===  this.rastreo_local[i]['correo']){
            this.longitud_usrRiesgo1 = this.rastreo_local[i]['longitud']; //longitud_usr_logg <- string before number
            this.latitud_usrRiesgo1 = this.rastreo_local[i]['latitud']; 
          }
        }
      } else if(this.usrRiesgo2 != null){
        for(let i=0; i<this.rastreo_local.length; i++){
          if(this.usrRiesgo2 ===  this.rastreo_local[i]['correo']){
            this.longitud_usrRiesgo2 = this.rastreo_local[i]['longitud']; //longitud_usr_logg <- string before number
            this.latitud_usrRiesgo2 = this.rastreo_local[i]['latitud']; 
          }
        }
      }
    });
//~~~~~~~~~~~~~~~~
/*
this.datos_prueba = this.usr_local;
console.log("datos_prueba: ", this.usr_local[0].correo);
*/
/*
    for(var i=0; i<this.usr_local.length; i++){
      if(id_usr_logg == this.usr_local[i]["id"]){
        this.correo_llave = this.usr_local[i]["correo"];
        console.log("Correo usuario loggeado 2: ",  this.usr_local[i]["correo"]);
      }
      console.log("Correo usuario loggeado: ", this.correo_llave);
    }
*/
    
  }


  escaneo():void{
    //Este es el mensaje para cuando no tiene Riesgo
    this.mensaje.mensaje('success', 'Sin Riesgo', 'Aunque no estes en riesgo sigue cuidandote y usando tu cubrebocas');
    //Este mensaje es para cuando tiene Riesgo
   //this.mensaje.mensaje('error', 'En Riesgo', 'Procura seguir cuidandote y si tienes algún sintoma checate en seguida');
    this.router.navigate(['/inicio']);
  }

}
