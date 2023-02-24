import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { SharedService } from 'src/app/app-services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.scss']
})
export class AddCenterComponent implements OnInit {

  constructor(public service: AdminService, private router: Router) {
  
  }
  ngOnInit(): void {
    this.service.center = {
      id: null,
      healthCenterName: null,
      goverment: null,
      password: null
    }
    
  }
  RefresherFormBook() {
    this.service.center.id = null;
    this.service.center.healthCenterName = null;
    this.service.center.goverment = null;
    this.service.center.password = null;
  }
  submit() {
    if (this.service.center.id != null && this.service.center.goverment != null && this.service.center.healthCenterName != null && this.service.center.password != null) {
      this.service.postCenter().subscribe(res => {
        Swal.fire(
          'Created',
          'Done',
          'success'
        )
        location.href='/dashboard/centerList'
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
