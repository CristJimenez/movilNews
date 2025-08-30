import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  public email!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit() {
  }

  public onLogin() {}

  public initForm() {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.minLength(4), Validators.required]);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

}
