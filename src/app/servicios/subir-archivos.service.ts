import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivosService {

  constructor() { }
  subirArchivo(archivo: File, tipo: string, id: string) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append('image', archivo, archivo.name);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      console.log(archivo);
      console.log(tipo);
      console.log(id);
      const url = 'http://localhost:3000' + '/upload/' + tipo + '/' + id;
      xhr.open('PUT', url, true);
      xhr.send(formData);
    });


  }

  BorrarArchivo(tipo: string, id: string) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      console.log(tipo);
      console.log(id);
      const url = 'http://localhost:3000' + '/upload/' + tipo + '/' + id;
      xhr.open('DELETE', url, true);
      xhr.send(formData);
    });


  }
}
