import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';
import { JugarService } from '../../services/jugar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-caja-comentarios',
  templateUrl: './caja-comentarios.component.html',
  styles: [
  ]
})
export class CajaComentariosComponent implements OnInit{

  usuario!: Usuario;

  miFormulario: FormGroup = this.fb.group({
    information:     [ '', [ Validators.required, Validators.minLength(1) ]],
  });

  constructor( private authService: AuthService,
               private snackbar: MatSnackBar,
               private fb: FormBuilder,
               private jugarService: JugarService ) {}

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
  }

  publicarComentario(){
    const { information } = this.miFormulario.value;
    this.jugarService.addComentario( this.usuario.idUser!, information )
                                      .subscribe( res => {
                                        this.jugarService.getComentarios();
                                        this.miFormulario.reset();
                                        this.showSnackbar('El comentario ha sido publicado con éxito!');
                                      })
  }

  showSnackbar( message: string ): void{
    this.snackbar.open( message, 'ok', {
      duration: 3500
    })
  }
}
