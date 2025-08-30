import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { Toast } from 'src/app/shared/providers/toast/toast';
import { Storage } from 'src/app/shared/services/storage/storage';
import { v4 } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  public name!: FormControl;
  public lastName!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public confirmPassword!: FormControl;
  public registerForm!: FormGroup;

  constructor(
    private readonly storageSrv: Storage,
    private readonly router: Router,
    private readonly toatProv: Toast,
  ) {
    this.initForm();
  }

  ngOnInit() {}

  public async doRegister() {
    let users = this.storageSrv.get<IUser[]>('users');
    if(!users) {
      users = [];
    }

    const exist = users.find(u => u.email === this.email.value);
    if(exist) {
      await this.toatProv.present({
        message: 'This email already exist',
        position: 'bottom',
        color: 'warning',
      });
      return;
    }

    const passMissmatch = this.password.value === this.confirmPassword.value;
    if(!passMissmatch) {
      await this.toatProv.present({
        message: 'Password missmatch',
        position: 'bottom',
        color: 'warning',
      });
      return;
    }

    users.push({
      id: v4(),
      ...this.registerForm.value
    });
    this.storageSrv.set('users', users);
    this.registerForm.reset({
      
    });
    this.router.navigate(['/']);
    await this.toatProv.present({
        message: 'Login with success',
        position: 'bottom',
        color: 'success',
      });
      return;
  }

  public initForm() {
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.confirmPassword = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }

}
