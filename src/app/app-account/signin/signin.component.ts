import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavigationStart, Router } from '@angular/router';
import { ParentService } from 'src/app/parent.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public service:ParentService,private router: Router) { }

  ngOnInit(): void {
    const displayLoadingIndicator=false;  
    this.service.login={
      id:null,
      password:null
    }
  }
  RefresherFormBook() {
    this.service.login.id = null
    this.service.login.password = null
  }
  login(){
    this.service.login.id = Number.parseInt(this.service.login.id.toString())
    this.service.loginParent().subscribe(res => {
      Swal.fire(
        'Login is success',
        'Done',
        'success'
        )       
        this.router.navigateByUrl('/dashboard');
        this.RefresherFormBook();
    },
      err => {
        Swal.fire(
          'ERROR !',
          'Not Found',
          'error'
          )
        console.log(err)
      })
  }

}
