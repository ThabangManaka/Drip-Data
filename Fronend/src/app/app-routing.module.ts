import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './guard/auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
  {path:'', component: WelcomeComponent,  canActivate: [AuthGuard] },

  {path:'login', component: LoginComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'reset-password', component:ResetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
