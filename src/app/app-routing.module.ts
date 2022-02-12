import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './admin/category/category.component';
import { ExpenselistComponent } from './admin/expenselist/expenselist.component';
import { ItemlistComponent } from './admin/itemlist/itemlist.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ExpenseComponent } from './expense/expense.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'admin',component: AdminComponent,canActivate:[AuthGuard],data:{role:'ro01'}},//
  {path:'userlist',component: UserlistComponent},
  {path:'itemlist',component: ItemlistComponent},
  {path:'expenselist',component: ExpenselistComponent},
  {path:'categories',component: CategoryComponent},
  {path:'register',component: UserComponent},
  {path:'userhome',component: UserhomeComponent,canActivate:[AuthGuard],data:{role:'jh01'}},//
  {path:'expense',component: ExpenseComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
