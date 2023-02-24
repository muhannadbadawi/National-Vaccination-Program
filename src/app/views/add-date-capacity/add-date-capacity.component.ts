import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { SharedService } from 'src/app/app-services/shared.service';
import Swal from 'sweetalert2';
import { Cookies } from 'typescript-cookie';

@Component({
  selector: 'app-add-date-capacity',
  templateUrl: './add-date-capacity.component.html',
  styleUrls: ['./add-date-capacity.component.scss']
})
export class AddDateCapacityComponent implements OnInit {

  constructor(public service: AdminService, private router: Router) {
    service.GetCenterDate()
  }

  id = Cookies.get("centerId")
 
  ngOnInit(): void {

    this.service.adminCapacity = {
      id: 0,
      centerId: Cookies.get("centerId").toString(),
      vaccineId: null,
      day:null
    }
    this.service.adminCapacity.centerId = this.id.toString();
  }
  RefresherFormAdminCapacity() {
    this.service.adminCapacity.centerId = null
    this.service.adminCapacity.vaccineId = null
    this.service.adminCapacity.day=null
  }
  cancel() {
    this.RefresherFormAdminCapacity()
    Cookies.remove("centerId")
  }
  submit() {
    debugger
    this.service.adminCapacity.centerId=Cookies.get("centerId").toString()
    if (this.service.adminCapacity.centerId != null && this.service.adminCapacity.vaccineId != null && this.service.adminCapacity.day!=null) {
      
      this.service.postCenterDate().subscribe(res => {
        Swal.fire(
          'Created',
          'Done',
          'success'
        )
        this.RefresherFormAdminCapacity();
        // location.href='/dashboard/centerList'
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
