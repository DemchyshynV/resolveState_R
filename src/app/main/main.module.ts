import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from './components/main/main.component';
import {UsersComponent} from './components/users/users.component';
import {SharedModule} from '../shared/shared.module';
import {UserResolveService, UserService} from './services';
import {UserComponent} from './components/user/user.component';


@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[UserService, UserResolveService]
})
export class MainModule { }
