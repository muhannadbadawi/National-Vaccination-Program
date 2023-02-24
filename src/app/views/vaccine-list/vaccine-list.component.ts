import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/app-services/admin.service';
import { SharedService } from 'src/app/app-services/shared.service';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.scss']
})
export class VaccineListComponent implements OnInit {

  constructor(public service: AdminService) {
    service.getVaccine();
    if(localStorage.getItem("type")=="2")
    {
      this.type=false
    }
    else
      this.type=true
  }
  type:boolean
 
  fillData(item: any) {
    this.service.vaccine.id = item.id;
    this.service.vaccine.name = item.name;
    this.service.vaccine.numberOfDoses = item.numberOfDoses;
    this.service.vaccine.preferredAge = item.preferredAge;
  }
  removeVaccine(id:any){
    debugger
    this.service.vaccine.id=id
    this.service.deleteVaccine().subscribe(res => {
      debugger
      console.log(res)
      location.href='/dashboard/vaccineList'

    });
  }

  ngOnInit(): void {
    this.service.vaccine={
      id:0,
      name:null,
      numberOfDoses:null,
      preferredAge:null
    }
  }

}
