import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { Storage } from './providers/storage/storage';
import { Toast } from './providers/toast/toast';
import { Http } from './providers/http/http';
import { SelectComponent } from './components/select/select.component';
import { CardComponent } from './components/card/card.component';

const modules = [ IonicModule, ReactiveFormsModule, FormsModule ]
const components = [ InputComponent, ButtonComponent, SelectComponent, CardComponent ]
const services = [ Storage, Toast, Http ]

@NgModule({
  declarations: [ ...components ],
  providers: [ ...services ],
  imports: [ CommonModule, ...modules ],
  exports: [ ...modules, ...components ],
})
export class SharedModule { }
