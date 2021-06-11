import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  isSignedIn = false;
  hide = true;

  operadorForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router,
    public authService: AuthService,
    private toastr: ToastrService,
    private tecnicoService: TecnicoService
  ) { }

  ngOnInit(): void {
    const hasUser$ = this.authService.hasUser();
    if (hasUser$) {
      this.router.navigate(['inicio/home']);
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  onSubmit() {
    this.authService.signIn(this.operadorForm.value.username, this.operadorForm.value.password)
      .then(() => {
        this.isSignedIn = true;
        this.toastr.success('Ingreso de sesion exitoso', '¡Bienvenido!');
        this.router.navigate(['inicio/home']);
      }).catch((error) => {
        this.isSignedIn = false;
        this.toastr.error(error, '¡Error!');
      });
  }

  getErrorMessage(formulario) {
    if (formulario.hasError('required')) {
      return 'Debe ingresar un valor';
    } if (formulario.hasError('pattern')) {
      return 'Debe ingresar un mail válido';
    } if (!formulario.hasError('minLength')) {
      return 'Ingresar una contraseña de 6 o más valores';
    }
  }
}
