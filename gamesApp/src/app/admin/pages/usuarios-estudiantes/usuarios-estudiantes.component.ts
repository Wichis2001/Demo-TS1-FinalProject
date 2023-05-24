import { Component } from '@angular/core';
import { UsuarioGenerado } from '../../interfaces/user.interface';
import { ManejoUsuariosService } from '../../services/manejo-usuarios.service';

@Component({
  selector: 'app-usuarios-estudiantes',
  templateUrl: './usuarios-estudiantes.component.html',
  styles: [
  ]
})
export class UsuariosEstudiantesComponent {

  public usuarios: UsuarioGenerado[] = [];
  public tipoUsuario: string = 'Estudiante';
  constructor( private manejoUsuariosService: ManejoUsuariosService ) {}

  ngOnInit(): void {
    this.manejoUsuariosService.getUsuariosEstudiantes()
      .subscribe( usuarios =>{
        this.usuarios = usuarios
      } );
  }
}
