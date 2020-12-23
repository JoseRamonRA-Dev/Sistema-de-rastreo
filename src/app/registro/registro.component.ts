import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MensajesService} from '../WebServices/mensajes.service';
import {RegistrousrService} from '../WebServices/registro/registrousr.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 
  datos: FormGroup;
  datos2: any;
  constructor(private formBuilder: FormBuilder,private servicio: RegistrousrService, 
    private mensaje: MensajesService, private router: Router) { 
    this.datos = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidop': new FormControl('',Validators.required),
      'apellidom': new FormControl('',Validators.required),
      'calle': new FormControl('',Validators.required),
      'estado': new FormControl('',Validators.required),
      'municipio': new FormControl('',Validators.required),
      'correo': new FormControl('',Validators.required),
      'numerocel': new FormControl('',Validators.required),
      'contrasena': new FormControl('',Validators.required),
      'contra2': new FormControl('',Validators.required),
     });
  }
  guardarCambios():void{
    this.datos2 = this.datos.value;
    if((this.datos2.nombre!="") &&(this.datos2.apellidop!="") &&(this.datos2.apellidom!="") &&(this.datos2.calle!="") &&(this.datos2.estado!="") &&(this.datos2.municipio!="") && (this.datos2.correo!="") &&(this.datos2.contrasena!="") &&(this.datos2.contra2!="") &&(this.datos2.numerocel!="")){
      if(this.datos2.contra2 == this.datos2.contrasena){
        this.servicio.registrarUsuario(this.datos2).then((res) => {
          this.mensaje.mensaje('success', 'Registro correcto', 'Puedes iniciar sesion cuando  quieras, solamente ingresando tu correo y contraseña que acabas de ingresar en el registro');
          this.router.navigate(['/inicio']);
      })
      .catch((error) => {
        
      });
      }else{
        this.mensaje.mensaje('error', 'CONTRASEÑAS DIFERENTES', 'Las contraseñas ingresadas no son correctas');
      }
    }else{
      this.mensaje.mensaje('error', 'Datos Incompletos', 'Necesitas ingresar todos los datos');
    }
    
  }
  ngOnInit(): void {
  }

}
