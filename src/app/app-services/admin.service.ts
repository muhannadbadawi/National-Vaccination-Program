import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cookies } from 'typescript-cookie';
import { Center } from '../Center.model';
import { Parent } from '../views/parent-list/parent.model';
import { AdminCapacity } from '../views/add-date-capacity/admin-capacity.model';
import { Vaccine } from '../views/vaccine-list/vaccine.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = "https://localhost:44325/api/Admin/";
  parents: Parent[];
  vaccines: Vaccine[];
  centers: Center[];

  center:Center
  vaccine:Vaccine
  adminCapacity: AdminCapacity;
  parent: Parent;

  constructor(private http: HttpClient) {
  }
  getAllParent() {
    this.http.get(this.url + "GetAllParent").toPromise().then(r => {
      this.parents = r as Parent[];
    });
  }
  getVaccine() {
    this.http.get(this.url + "GetAllVaccines").toPromise().then(r => {
      this.vaccines = r as Vaccine[];
    });
  }
  getCenters() {
    this.http.get(this.url + "GetAllHealthCenter").toPromise().then(r => {
      this.centers = r as Center[];
    });
  }
  GetCenterDate() {
    this.http.get(this.url + "GetAllCenterDate/" + Cookies.get("centerId")).toPromise().then(r => {
      this.adminCapacity = r as AdminCapacity;
    });
  }
  postCenterDate() {
    return this.http.post(this.url + "AddDate", this.adminCapacity);
  }
  postCenter() {
    return this.http.post(this.url + "AddHealthCenter", this.center);
  }
  postVaccine() {
    return this.http.post(this.url + "AddVaccine", this.vaccine);
  }
  
  deleteVaccine(){
    debugger
    return this.http.delete(this.url+"DeleteVaccine/"+this.vaccine.id)
  }



  deleteCenter() {
    return this.http.delete(this.url + "DeleteCenter/" + this.center.id);
  }
}
