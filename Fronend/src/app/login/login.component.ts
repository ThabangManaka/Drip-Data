import { AuthStateService } from './../services/auth-state.service';
import { TokenService } from './../services/token.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
    private toastr: ToastrService,
    private router :  Router,
    private token: TokenService,
    private authState : AuthStateService) { }

  ngOnInit(): void {
  }
  onSubmit(form) {
   this.userService.login(form).subscribe(result => {
    this.responseHandler(result)

    // this.router.navigateByUrl[('/welcome')];

    this.toastr.success("You succesfully Logged In","Success");

  },
  error => {
    console.log(error);
    this.toastr.error("Something is wrong with your form","Error");
  },() => {
    this.authState.setAuthState(true);
    this.router.navigate(['welcome']);
  });


}

  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }


  }

