import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicacion-inicio',
  templateUrl: './aplicacion-inicio.component.html',
  styleUrls: ['./aplicacion-inicio.component.css']
})
export class AplicacionInicioComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.loadScript('./assets/assets/js/vartical-layout.min.js');
    this.loadScript('./assets/assets/js/script.js');
  }

  public loadScript(url: string) {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


}
