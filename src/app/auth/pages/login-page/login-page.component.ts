import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder)
  private authService = inject(AuthService)
  private snackbar = inject(MatSnackBar)
  private router = inject(Router)


  public loginForm: FormGroup = this.fb.group({
    email: ['manuelguma25@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  login() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      {
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (err) => this.snackbar.open(err, 'Cerrar', { duration: 3000 })

      }

    );
    console.log(this.loginForm.value);
}
}
