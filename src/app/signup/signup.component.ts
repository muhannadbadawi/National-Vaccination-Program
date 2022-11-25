import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ParentService } from '../parent.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(
    public service: ParentService
    ) { }
  ngOnInit(): void {
    this.service.parent = {
      id: null,
      name: null,
      email: null,
      familybooknumber: null,
      password: null
    }
  }
  RefresherFormBook() {
    this.service.parent.id = null
    this.service.parent.name = null
    this.service.parent.email = null
    this.service.parent.familybooknumber = null
    this.service.parent.password = null
    
  }
  submit() {
    if (this.service.parent.id != null &&this.service.parent.name != null&&this.service.parent.email != null && this.service.parent.familybooknumber != null && this.service.parent.password != null) {
      this.service.parent.id = Number.parseInt(this.service.parent.id.toString())
      this.service.postParent().subscribe(res => {
        Swal.fire(
          'Created ',
          'Done',
          'success'
          )
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
    else{
      Swal.fire(
        'ERROR !',
        'Make Sure You Fill All Field!',
        'error'
        )
    }
  }

}
