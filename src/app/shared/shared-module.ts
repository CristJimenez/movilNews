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
import { News } from './services/news/news';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { Loader } from './providers/loader/loader';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';

const modules = [ IonicModule, ReactiveFormsModule, FormsModule, RouterModule ]
const components = [ InputComponent, ButtonComponent, SelectComponent, 
  CardComponent, LinkComponent, ListComponent, HeaderComponent, ModalComponent ]
const services = [ Storage, Toast, Http, News, Loader ]

@NgModule({
  declarations: [ ...components ],
  providers: [ ...services ],
  imports: [ CommonModule, ...modules ],
  exports: [ ...modules, ...components ],
})
export class SharedModule { }
