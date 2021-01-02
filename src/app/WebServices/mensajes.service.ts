import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }
  mensaje(icono, titulo, subtitulo) {
    Swal.fire({
      icon: icono,
      title: titulo,
      text: subtitulo
    })
  }
  
  timer(tiempo, titulo) {
    let timerInterval
    Swal.fire({
      title: titulo,
      timer: tiempo,
      timerProgressBar: true,

      willClose: () => {
        clearInterval(timerInterval)
      }
    });
  }
}
