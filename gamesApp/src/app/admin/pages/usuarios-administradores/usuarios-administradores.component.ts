import { Component } from '@angular/core';
import { UsuarioGenerado } from '../../interfaces/user.interface';
import { ManejoUsuariosService } from '../../services/manejo-usuarios.service';

@Component({
  selector: 'app-usuarios-administradores',
  templateUrl: './usuarios-administradores.component.html',
  styles: [
  ]
})
export class UsuariosAdministradoresComponent {

  public usuarios: UsuarioGenerado[] = [];
  public tipoUsuario: string = 'Administrador';
  constructor( private manejoUsuariosService: ManejoUsuariosService ) {}

  ngOnInit(): void {
    this.manejoUsuariosService.getUsuariosAdministradores()
      .subscribe( usuarios =>{
        this.usuarios = usuarios
      } );
  }
}
