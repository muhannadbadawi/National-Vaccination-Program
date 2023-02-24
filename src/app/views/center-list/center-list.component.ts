import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { SharedService } from 'src/app/app-services/shared.service';
import { Cookies } from 'typescript-cookie';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.scss']
})
export class CenterListComponent implements OnInit {

  constructor(public service: AdminService ,sharedSarvice:SharedService) {
    sharedSarvice.SetFBN();
    service.getCenters(); 
  }
 
  fillData(item: any) {
   this.service.center.id=item.id
   this.service.center.healthCenterName=item.healthCenterName
   this.service.center.goverment=item.goverment
  }
  deleteCenter(id:any){
    this.service.center.id=id
    this.service.deleteCenter().subscribe(res => {
      debugger
      console.log(res)
      location.href='/dashboard/centerList'
    });   
  }
  showAddDate(id:string){
    Cookies.set("centerId",id)
  }
  ngOnInit(): void {
    this.service.center={
      id:null,
      goverment:null,
      healthCenterName:null,
      password:null
    }
  }

}
