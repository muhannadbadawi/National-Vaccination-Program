import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/app-services/admin.service';
import { CenterService } from 'src/app/app-services/center.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-capacity',
  templateUrl: './add-capacity.component.html',
  styleUrls: ['./add-capacity.component.scss']
})
export class AddCapacityComponent implements OnInit {
  constructor(public service: CenterService, public adminService: AdminService) {
    adminService.GetCenterDate()
    service.GetVaccine().subscribe(res => {
      this.vaccine = res;
    });
  }
  vaccine: any
  ngOnInit(): void {
    this.service.centerCapacity = {
      id: 0,
      numberOfChild: null,
      centerId: localStorage.getItem("ID"),
      startTime: null,
      endTime: null
    }
  }
  RefresherFormCenterCapacity() {
    this.service.centerCapacity.centerId = localStorage.getItem("ID");
    this.service.centerCapacity.numberOfChild = null;
    this.service.centerCapacity.startTime = null;
    this.service.centerCapacity.endTime = null;
  }


  submit() {
    this.service.centerCapacity.startTime
    if (this.service.centerCapacity.numberOfChild != null && this.service.centerCapacity.startTime != null && this.service.centerCapacity.endTime != null) {
      this.service.postCenterTime().subscribe(res => {
        Swal.fire(
          'Created',
          'Done',
          'success'
        )
        this.RefresherFormCenterCapacity();
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
