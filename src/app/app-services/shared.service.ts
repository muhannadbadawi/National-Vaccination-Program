import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookies, getCookie } from 'typescript-cookie';
import { Parent } from '../views/parent-list/parent.model';
import { Center } from '../views/center-list/center.model';
import { Vaccine } from '../views/vaccine-list/vaccine.model';
import { Reservation } from '../views/reservation-list/reservation.model';
import { CenterCapacity } from '../views/add-capacity/center-capacity.model';
import { AdminCapacity } from '../views/add-date-capacity/admin-capacity.model';
import { ReservationsMenu } from '../views/reservations-menu/reservations-menu.model';
import { Appointment } from '../views/reservations-menu/appointment.model';
import { Login } from '../app-account/signin/Login.model';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url = "https://localhost:44325/api/";


  vaccine: Vaccine;
  vaccines: Vaccine[];

  center: Center;
  centers: Center[];

  reservation: Reservation;
  reservations: Reservation[];

  centerCapacity: CenterCapacity
  centersCapacity: CenterCapacity[]

  adminCapacity: AdminCapacity
  adminsCapacity: AdminCapacity[]

  reservationMenu: ReservationsMenu[]
  reservationsMenu: ReservationsMenu[]

  appointment: Appointment
  login: Login;
  parent: Parent;


 
  constructor(private http: HttpClient) {
  }
  SetFBN() {
    this.idCheck(localStorage.getItem("ID")).subscribe(result => {
      Cookies.set("FBN", result.familyBookNumber);

    })
  }
  SetUser() {
    if (localStorage.getItem("ID").length == 10) {
      this.idCheck(localStorage.getItem("ID")).subscribe(result => {
        Cookies.set("name", result.name);
      })
    }
    else if (localStorage.getItem("ID").length == 7) {
      this.idCheck(localStorage.getItem("ID")).subscribe(result => {
        Cookies.set("name", result.healthCenterName);
      })
    }
    else if (localStorage.getItem("ID").length == 5) {
      this.idCheck(localStorage.getItem("ID")).subscribe(result => {
        Cookies.set("name", result.firstName);
      })
    }

  }

  loginUser(): Observable<any> {
    return this.http.post(this.url + "Authorization/login", this.login);
  }

  idCheck(id: string): Observable<any> {

    if (id.length == 10) {
      return this.http.get(this.url + 'Parent/GetFBN/' + id);
    }
    else if (id.length == 7) {
      return this.http.get(this.url + 'HealthCenter/GetCenter/' + id);
    }
    else if (id.length == 5) {
      return this.http.get(this.url + 'Admin/GetAdmin/' + id);
    }
    else
      return null

  }
  logout() {
    localStorage.removeItem('ID');
    localStorage.removeItem('type');
    localStorage.removeItem("RemeberMe");
    Cookies.remove("FBN")
    Cookies.remove("childId")
    Cookies.remove("name")
  }
}
