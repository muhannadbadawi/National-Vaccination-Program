import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/app-services/shared.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public service: SharedService) {

    if (localStorage.getItem('RemeberMe') == "true") {
      location.href='/dashboard'
    }
  }
  remeberMe: boolean = false;
  ngOnInit(): void {
    const displayLoadingIndicator = false;
    this.service.login = {
      id: null,
      password: null
    }
  }
  RefresherFormBook() {
    this.service.login.id = null
    this.service.login.password = null
  }
  login() {
    this.service.loginUser().subscribe(res => {
      debugger
      if (res!=0) {
        localStorage.setItem("type",res)
        localStorage.setItem('ID', this.service.login.id);
        localStorage.setItem("RemeberMe", this.remeberMe.toString());
        location.href='/dashboard'
        this.RefresherFormBook();
      }
      else{
        Swal.fire(
          'ERROR !',
          'please Enter the currect ID and Password!',
          'error'
        )
      }
      
    })
  }
}
