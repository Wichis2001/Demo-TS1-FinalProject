import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform( password: string): string {
    if( password !== null && password !== ''){
      return password;
    }
    return 'Sin Contraseña'
  }

}
