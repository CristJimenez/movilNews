import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { Storage } from './services/storage/storage';
import { Toast } from './providers/toast/toast';

const modules = [ IonicModule, ReactiveFormsModule, FormsModule ]
const components = [ InputComponent, ButtonComponent ]
const services = [ Storage, Toast ]

@NgModule({
  declarations: [ ...components ],
  providers: [ ...services ],
  imports: [ CommonModule, ...modules ],
  exports: [ ...modules, ...components ],
})
export class SharedModule { }
