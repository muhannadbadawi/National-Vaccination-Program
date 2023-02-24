import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/app-services/parent.service';
import { SharedService } from 'src/app/app-services/shared.service';
import Swal from 'sweetalert2';
import { Cookies } from 'typescript-cookie';
import { Appointment } from './appointment.model';

@Component({
  selector: 'app-reservations-menu',
  templateUrl: './reservations-menu.component.html',
  styleUrls: ['./reservations-menu.component.scss']
})
export class ReservationsMenuComponent implements OnInit {

  constructor(public service: ParentService) {
    service.GetReservationsMenu()
  }

  ngOnInit(): void {
    this.service.appointment = {
      id: 0,
      childId: null,
      centerId: null,
      vaccineId: null
    }
  }
  fillData(item: any) {
    this.service.reservationMenu = item.centerName
    this.service.reservationMenu = item.vaccineName
    this.service.reservationMenu = item.goverment
    this.service.reservationMenu = item.date
    this.service.reservationMenu = item.time
  }
  reservation(item: any) {

    this.service.appointment.childId = Cookies.get("childId").toString();
    this.service.appointment.centerId = item.centerName;
    this.service.appointment.vaccineId = item.vaccineName;
    this.service.AppointmentRequest().subscribe(res => {
      Swal.fire(
        'Reservation',
        'Booking Confirmed',
        'success'
      )
    },
      err => {
        Swal.fire(
          'ERROR !',
          'Reservation Already Exists',
          'error'
        )
        console.log(err)
      });
  }
}
