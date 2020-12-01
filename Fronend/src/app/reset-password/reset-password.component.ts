import { Component, OnInit } from '@angular/core';
import { SnotifyModule, SnotifyService } from 'ng-snotify';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor( private toastr: ToastrService,
    private userService: UserService,
    private notify : SnotifyModule,
    private snotifyService: SnotifyService) { }

  ngOnInit(): void {
  }
  onSubmit(form) {
    this.userService.sendPasswordResetLink(form).subscribe(result => {
   
 
     // this.router.navigateByUrl[('/welcome')];
 
 //this.toastr.success("You succesfully Send the Email","Success");
  this.snotifyService.success('success','Send')
 
   },
   error => {
     console.log(error);
     this.snotifyService.error(error.error.error);
     
   },() => {
  
   });
 
 
 }
 
   // Handle response

    handleResponse(res) {
        console.log(res);
    }
}
