import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/app-services/admin.service';
import { SharedService } from 'src/app/app-services/shared.service';
import { Center } from '../center-list/center.model';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.scss']
})
export class AppMapComponent implements OnInit {
  langs: any;
  city: any;
  center: any
  centers: Center[];
  // centers = {
  //   Zarqa: [''],
  //   Amman: [''],
  //   Irbid: [''],
  //   Ajloun: [''],
  //   Jerash: [''],
  //   Balqa: [''],
  //   Mafraq: [''],
  //   Madaba: [''],
  //   Karak: [''],
  //   Maan: [''],
  //   Aqaba: [''],
  //   Tafilah: ['']
  // }
  constructor(public service: AdminService) {
    this.service.getCenters()
  }

  ngOnInit(): void {
    this.service.center = {
      id: null,
      goverment: null,
      healthCenterName: null,
      password: null
    }
  }
  fillData(item: any) {
      this.service.center.id = item.id
      this.service.center.goverment = item.goverment
      this.service.center.healthCenterName = item.healthCenterName
  }
  myfun(s: any) {
    // this.fillData()
    debugger
    this.city = s.title

    // switch (this.city) {
    //   case "Zarqa":
    //     this.center = this.centers.Zarqa
    //     this.city = "الزرقاء"
    //     break;
    //   case "Amman":
    //     this.center = this.centers.Amman
    //     this.city = "عمان"
    //     break;
    //   case "Irbid":
    //     this.center = this.centers.Irbid
    //     this.city = "اربد"
    //     break;
    //   case "Ajloun":
    //     this.center = this.centers.Ajloun
    //     this.city = "عجلون"
    //     break;
    //   case "Jerash":
    //     this.center = this.centers.Jerash
    //     this.city = "جرش"
    //     break;
    //   case "Mafraq":
    //     this.center = this.centers.Mafraq
    //     this.city = "المفرق"
    //     break;
    //   case "Tafilah":
    //     this.center = this.centers.Tafilah
    //     this.city = "الطفيلة"
    //     break;
    //   case "Balqa":
    //     this.center = this.centers.Balqa
    //     this.city = "البلقاء"
    //     break;
    //   case "Madaba":
    //     this.center = this.centers.Madaba
    //     this.city = "مأدبا"
    //     break;
    //   case "Karak":
    //     this.center = this.centers.Karak
    //     this.city = "الكرك"
    //     break;
    //   case "Aqaba":
    //     this.center = this.centers.Aqaba
    //     this.city = "العقبة"
    //     break;
    //   case "Maan":
    //     this.center = this.centers.Maan
    //     this.city = "معان"
    //     break;
    // }
  }
}
