import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ListUserComponent} from "./pages/users/list-user/list-user.component";
import {AddUserComponent} from "./pages/users/add-user/add-user.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: ListUserComponent },
  { path: 'addUser', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
