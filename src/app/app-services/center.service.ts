import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Center } from '../Center.model';
import { CenterCapacity } from '../views/add-capacity/center-capacity.model';
import { AdminCapacity } from '../views/add-date-capacity/admin-capacity.model';
import { ConformVaccine } from '../views/reservation-list/conformVaccine.model';
import { Reservation } from '../views/reservation-list/reservation.model';
import { Vaccine } from '../views/vaccine-list/vaccine.model';

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  url = "https://localhost:44325/api/";
  centerCapacity: CenterCapacity;
  adminCapacity: AdminCapacity;

  center: Center;
  centers: Center[];

  reservationList: Reservation;
  reservationsList: Reservation[];

  conformVaccine: ConformVaccine

  
  constructor(private http: HttpClient) {
  }
  GetReservation() {
    this.http.get(this.url + "HealthCenter/GetAllReservations/"+localStorage.getItem("ID")).toPromise().then(r => {
      this.reservationsList = r as Reservation[];
    });
  }
 
  GetVaccine(): Observable<any>{
    debugger
    return this.http.get(this.url +"HealthCenter/GetVaccineName/"+localStorage.getItem("ID"),{ responseType: 'text' })
  }

  Conform(): Observable<any> {
    debugger
    return this.http.post(this.url + "HealthCenter/ConformVaccine", this.conformVaccine)
  }

  postCenterTime(): Observable<any> {
    return this.http.post(this.url + "HealthCenter/AddTime", this.centerCapacity);
  }

}
