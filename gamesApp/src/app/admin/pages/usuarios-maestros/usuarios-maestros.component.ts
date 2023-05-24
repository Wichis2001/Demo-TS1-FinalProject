import { Component } from '@angular/core';
import { UsuarioGenerado } from '../../interfaces/user.interface';
import { ManejoUsuariosService } from '../../services/manejo-usuarios.service';

@Component({
  selector: 'app-usuarios-maestros',
  templateUrl: './usuarios-maestros.component.html',
  styles: [
  ]
})
export class UsuariosMaestrosComponent {
  public usuarios: UsuarioGenerado[] = [];
  public tipoUsuario: string = 'Profesor';
  constructor( private manejoUsuariosService: ManejoUsuariosService ) {}

  ngOnInit(): void {
    this.manejoUsuariosService.getUsuariosMaestros()
      .subscribe( usuarios =>{
        this.usuarios = usuarios
      } );
  }
}
