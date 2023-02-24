import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { SharedService } from 'src/app/app-services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.component.html',
  styleUrls: ['./add-vaccine.component.scss']
})
export class AddVaccineComponent implements OnInit {

  constructor(public service: AdminService, private router: Router) {

  }
  ngOnInit(): void {
    this.service.vaccine = {
      id: 0,
      name: null,
      preferredAge: null,
      numberOfDoses: null
    }
  }
  RefresherFormVaccine() {
    this.service.vaccine.name = null;
    this.service.vaccine.preferredAge = null;
    this.service.vaccine.numberOfDoses = null;
  }
  submit() {
    if (this.service.vaccine.name != null && this.service.vaccine.numberOfDoses != null && this.service.vaccine.preferredAge != null) {
      this.service.postVaccine().subscribe(res => {
        Swal.fire(
          'Created',
          'Done',
          'success'
        )
        location.href='/dashboard/vaccineList'
        this.RefresherFormVaccine();
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
