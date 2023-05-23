import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform( password: string ): string {
    if( password!== '' && password!== null ){
      return 'Posee Contraseña'
    }
    return 'Sin Contraseña'
  }

}
