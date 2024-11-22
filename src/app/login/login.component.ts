import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string = "";
  estado: string = "";

  get username() {
    return this.formUser.get('username') as FormControl;
  }
  get password() {
    return this.formUser.get('password') as FormControl;
  }

  formUser = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  procesar() {
    console.log(this.formUser.value);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  login() {
    const username = this.formUser.get('username')?.value || '';
    const password = this.formUser.get('password')?.value || '';

    if (username === 'admin' && password === '12345') {
      this.router.navigateByUrl('/pedido');
    } else {
      alert('Usuario o contraseña no validos')
    }
  }
}
