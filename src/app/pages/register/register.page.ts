import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { IUser } from 'src/app/interfaces/user.interface';
import { Toast } from 'src/app/shared/providers/toast/toast';
import { Storage } from 'src/app/shared/providers/storage/storage';
import { v4 } from 'uuid';
import { Http } from 'src/app/shared/providers/http/http';
import { environment } from 'src/environments/environment';
import { compileNgModule } from '@angular/compiler';
import { IApiCountry, ICountry } from 'src/app/interfaces/country.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  public name!: FormControl;
  public lastName!: FormControl;
  //public country!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public confirmPassword!: FormControl;
  public registerForm!: FormGroup;

  public countries!: IApiCountry;

  constructor(
    private readonly storageSrv: Storage,
    private readonly router: Router,
    private readonly toatProv: Toast,
    private httpProv: Http,
  ) {
    this.initForm();
  }

  async ngOnInit() {
    //const url = `${environment.URL}`;
    //this.countries = await this.httpProv.get<IApiCountry>(url);
    //this.countries.data = this.countries.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  public async doRegister() {
    let users = this.storageSrv.get<IUser[]>(CONSTANTS.USERS);
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

    const passMatch = this.password.value === this.confirmPassword.value;
    if(!passMatch) {
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
    this.storageSrv.set(CONSTANTS.USERS, users);
    this.registerForm.reset();
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
    //this.country = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.confirmPassword = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      //country: this.country,
      email: this.email,
      password: this.password,
    });
  }

}
