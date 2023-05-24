import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManejoUsuariosService } from '../../services/manejo-usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificacionReporte, RoleNotificacion } from '../../interfaces/user.interface';

@Component({
  selector: 'app-agregar-notificacion',
  templateUrl: './agregar-notificacion.component.html',
  styles: [
  ]
})
export class AgregarNotificacionComponent {

  miFormulario: FormGroup = this.fb.group({

    title:      [ '', [Validators.required, Validators.minLength(2)] ],
    descriptn:  [ '', [Validators.required, Validators.minLength(2)] ],
    rol:        new FormControl<RoleNotificacion>( RoleNotificacion.estudiante )
  });

  get currentNotificacion(): NotificacionReporte{
    const user = this.miFormulario.value as NotificacionReporte;
    return user;
  }

  constructor( private fb: FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private manejoUsuariosService: ManejoUsuariosService,
               private snackbar: MatSnackBar ) {}

  public roles = [
   {
     id: 'estudiante',
     desc: 'Usuarios Estudiantes'
   },
   {
     id: 'maestro',
     desc: 'Usuarios Profesores'
   }
  ]

  onSubmit(){
    this.manejoUsuariosService.crearNotificacion( this.currentNotificacion ).subscribe(
      res => {
        this.miFormulario.reset();
        this.showSnackbar('Notificacion creada con éxito')
      }
    )
  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }
}
