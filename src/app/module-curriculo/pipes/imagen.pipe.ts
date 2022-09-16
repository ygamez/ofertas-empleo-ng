import { Pipe, PipeTransform } from '@angular/core';
import { CurriculoResponse } from '../interfaces/curriculo.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( curriculo : CurriculoResponse ): string {
    return `assets/curriculo/${ curriculo.usuarioid }.jpj  `;
  }

}
