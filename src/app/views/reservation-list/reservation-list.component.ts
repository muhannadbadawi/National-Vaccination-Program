import { Component, OnInit } from '@angular/core';
import { CenterService } from 'src/app/app-services/center.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  constructor(public service:CenterService) {
    service.GetReservation()
  }
  childName:any
  fillData(item: any) {
    this.service.reservationList.id = item.id;
    this.service.reservationList.childId=item.childId
    this.service.reservationList.childName=item.childName
    this.service.reservationList.vaccineId=item.vaccineId
    this.service.reservationList.time=item.time
    this.service.reservationList.date=item.date
  }
  RefresherFormMenu(){
    this.service.reservationList.id = null
    this.service.reservationList.childId=null
    this.service.reservationList.vaccineId=null
    this.service.reservationList.time=null
    this.service.reservationList.date=null
  }
  conform(item:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Are You Sure To Confirm The Dose",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Confirm',
          'The Child Dose Confirmed',
          'success'
        )
        this.service.conformVaccine.centerId=localStorage.getItem("ID")
        this.service.conformVaccine.childId=item.childId
        this.service.conformVaccine.vaccineId=item.vaccineId
        this.service.Conform().subscribe(res => {
          debugger
          console.log(res)
          location.href='/dashboard/Reservations'
        });
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Child Dose Confirmation Cancelled :)',
          'error'
        )
      }
    })




   
  }
  ngOnInit(): void {
    this.service.conformVaccine={
      id:0,
      centerId:null,
      childId:null,
      vaccineId:null
    }
  }

}
