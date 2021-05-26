import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false;
  hide = true;

  operadorForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(6)])
  },
    { validators: this.MustMatch('password', 'password2') }
  );

  constructor(public authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.authService.signUp(this.operadorForm.value.username, this.operadorForm.value.password);
    if (this.authService.isLoggedIn) {
      this.isSignedIn = true;
      this.toastr.success('Registro de cuenta exitosa', '¡Completado!');
      this.router.navigate(['']);
    }
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

  MustMatch(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
