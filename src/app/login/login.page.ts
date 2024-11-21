import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  errorMessage: string = '';

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log('Login successful:', response);
        localStorage.setItem('email', this.formLogin.value.email);
        localStorage.setItem('password', this.formLogin.value.password);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log('Login failed:', error);
        this.errorMessage = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
      });
  }

  goToRegister() {
    this.router.navigate(['/registrar']); 
  }

}

