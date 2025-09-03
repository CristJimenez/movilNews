import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { IUser } from 'src/app/interfaces/user.interface';
import { Storage } from 'src/app/shared/providers/storage/storage';
import { Toast } from 'src/app/shared/providers/toast/toast';

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

  constructor(
    private readonly storageSrv: Storage,
    private readonly router: Router,
    private readonly toastProv: Toast,
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  public async onLogin() {
    console.log(this.loginForm.value);
    const users = this.storageSrv.get<IUser[]>(CONSTANTS.USERS) || [];

    const user = users.find(u => u.email === this.email.value);
    if(!user) {
      await this.toastProv.present({
        message: 'The user does not exist',
        position: 'bottom',
        color: 'danger',
      });
      return;
    }

    const validPassword = user.password === this.password.value;
    if(validPassword) {
      this.storageSrv.set(CONSTANTS.AUTH, {
        id: user.id,
      })
      return this.router.navigate(['/home']);
    }
    await this.toastProv.present({
      message: 'Password missmatch',
      position: 'bottom',
      color: 'danger',
    });
    return;
  }

  public initForm() {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.minLength(4), Validators.required]);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

}
