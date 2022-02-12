import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './shared/auth.service';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './admin/category/category.component';
import { ItemlistComponent } from './admin/itemlist/itemlist.component';
import { ExpenselistComponent } from './admin/expenselist/expenselist.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { ExpensetrackerService } from './shared/expensetracker.service';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseaddComponent } from './expense/expenseadd/expenseadd.component';
import{AuthInterceptor} from './shared/auth.interceptor';
import{AuthGuard} from './shared/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    CategoryComponent,
    ItemlistComponent,
    ExpenselistComponent,
    UserlistComponent,
    UserhomeComponent,
    ExpenseComponent,
    ExpenseaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [AuthService,ExpensetrackerService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
