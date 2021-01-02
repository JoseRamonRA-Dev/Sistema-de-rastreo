import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-coordenada',
  templateUrl: './log-coordenada.component.html',
  styleUrls: ['./log-coordenada.component.css']
})
export class LogCoordenadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    function coordenadas(){
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(muestracoordenadas,manejoerrores);
      }else{
        document.getElementById("salida").innerHTML="Tu navegador es chafa";
      }
    }
    function muestracoordenadas(posicion){
      var lt = posicion.coords.latitude;
      var ln = posicion.coords.longitude;
      
      document.getElementById("salida").innerHTML = "LATITUD: " + lt + "<br> LONGITUD: " + ln + "<br>";
    }
    function manejoerrores(error){
      var salida = document.getElementById("salida");
      switch(error.code){
        case error.PERMISSION_DENIED:
          salida.innerHTML = "EL USUARIO FUE GACHO"; 
          break;
        case error.POSICION_UNAVAILABLE:
          salida.innerHTML = "TE PERDISTE"; 
          break;
        case error.TIMEOUT:
          salida.innerHTML = "TIEMPO TRANS "; 
          break;
      }
    }
    
  }
  

}
