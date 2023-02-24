import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentService } from 'src/app/app-services/parent.service';
import { SharedService } from 'src/app/app-services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(
   
    public service: ParentService, private router: Router
  ) { }
  ngOnInit(): void {
    this.service.parent = {
      id: null,
      name: null,
      email: null,
      familyBookNumber: null,
      goverment:null,
      password: null
    }
  }
  RefresherFormBook() {
    this.service.parent.id = null
    this.service.parent.name = null
    this.service.parent.email = null
    this.service.parent.familyBookNumber = null
    this.service.parent.password = null

  }
  submit() {
    if (this.service.parent.id != null && this.service.parent.name != null && this.service.parent.email != null && this.service.parent.familyBookNumber != null && this.service.parent.password != null) {
      this.service.postParent().subscribe(res => {
        Swal.fire(
          'Created ',
          'Done',
          'success'
        )
        this.router.navigateByUrl('/signin');
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
    else {
      Swal.fire(
        'ERROR !',
        'Make Sure You Fill All Field!',
        'error'
      )
    }
  }

}
