import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookies } from 'typescript-cookie';
import { Child } from '../views/child-list/child.model';
import { ChildInfo } from '../views/details/childInfo';
import { Parent } from '../views/parent-list/parent.model';
import { Appointment } from '../views/reservations-menu/appointment.model';
import { ReservationsMenu } from '../views/reservations-menu/reservations-menu.model';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  url = "https://localhost:44325/api/";
  child: Child;
  childs: Child[];

  parent: Parent;
  parents: Parent[];


  appointment: Appointment;

  childInfo: ChildInfo
  childsInfo: ChildInfo[]

  reservationMenu: ReservationsMenu;
  reservationsMenu: ReservationsMenu[];
  constructor(private http: HttpClient) {
  }
  getAllChild() {
    this.http.get(this.url + 'Parent/SetChild/' + Cookies.get("FBN")).toPromise().then(res => {
      this.childs = res as Child[];
    });
  }
  GetReservationsMenu() {
    this.http.get(this.url + "Parent/GetMenu").toPromise().then(r => {
      this.reservationsMenu = r as ReservationsMenu[];
    });
  }
  postParent() {
    return this.http.post(this.url + "Authorization/register", this.parent);
  }
  AppointmentRequest(): Observable<any> {
    return this.http.post(this.url + "Parent/Reservation", this.appointment);
  }
  GetChildInfo() {
    this.http.get(this.url + "Parent/GetAllVStatus/" + Cookies.get("childId")).toPromise().then(r => {
      this.childsInfo = r as ChildInfo[];
    });
  }
  GetChild() {
    this.http.get(this.url + "Parent/GetChild/" + Cookies.get("childId")).toPromise().then(r => {
      this.child = r as Child
    });
  }
}
