import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
url ="assets/images.png";

  filedata:any;


  
  constructor(private toastr: ToastrService,
    private userService : UserService,
    private router :Router ,
    private countries : CountriesService) { }

  ngOnInit(): void {
  }
  selectFile(event) {
   if (event.target.files) {
     var reader = new FileReader()
     reader.readAsDataURL(event.target.files[0])
     reader.onload = (event: any) => {
       this.url = event.target.result
     }
    }
  }

      getAllCountries() {
      return this.countries.countryList;
      }

      getAllCities() {

      return this.countries.getCities;
      }
  onSubmit(form) {
    console.log(form);
    var myFormData = new FormData();
    const headers = new HttpHeaders();

  
    myFormData.append('image', this.url,);



  this.userService.register(form).subscribe(data => {
      console.log(data);
      this.toastr.success("You succesfully Register","Success");
      this.router.navigate(['login']);
    },
    error => {
      console.log(error);
      this.toastr.error("Something is with your form","Error");
    });


  }


}
