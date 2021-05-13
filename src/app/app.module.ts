import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/services/authentication.services';
import { HttpClientModule } from '@angular/common/http';

/**
 * routes configurations
 */
const appRoutes : Routes = [
  {path:"login", component: LoginComponent},
  {path:"tasks", component: TasksComponent},
  {path:"new-task", component: NewTaskComponent},
  {path:"register", component: RegistrationComponent},
  {path:"", redirectTo:"login", pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NewTaskComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), //config routes
    FormsModule,
    HttpClientModule
  ],
  //---- Declare all services in the Providers, this action allow us to perform injection -----
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
