import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {UsersComponent} from './components/users/users.component';
import {UserResolveService} from './services';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UsersComponent, resolve: {users: UserResolveService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
