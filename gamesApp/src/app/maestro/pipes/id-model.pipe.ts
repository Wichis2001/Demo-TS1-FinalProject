import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idModel'
})
export class IdModelPipe implements PipeTransform {

  transform( idModel:string ): string {
    switch ( idModel ) {
      case 'M1':
        return 'Scramble'
      break;
      case 'M2':
        return 'Preguntados'
      break;
      default:
        return 'No Validado'
      break;
    }
  }

}
