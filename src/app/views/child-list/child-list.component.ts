import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/app-services/parent.service';
import { SharedService } from 'src/app/app-services/shared.service';
import { Cookies } from 'typescript-cookie';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.scss']
})
export class ChildListComponent implements OnInit {

  constructor(public service: ParentService,sharedService:SharedService) {
    sharedService.SetFBN();
    service.getAllChild(); 
  }

  fillData(item: any) {
    this.service.child.id = item.id;
    this.service.child.firstName = item.firstName;
    this.service.child.lastName = item.lastName;
    this.service.child.birthDate= item.birthDate
    this.service.child.familyBookNumber = item.familyBookNumber;
    this.service.child.vaccineStatus = item.vaccineStatus;
  }
  details(id: string) {
    Cookies.set("childId",id)
    location.href='/dashboard/details'
  }
  reservation(id: string) {
    Cookies.set("childId",id)
    location.href='/dashboard/reservationsMenu'
  }
  // exportPdf() {
  //   import("jspdf").then(jsPDF => {
  //     import("jspdf-autotable").then(x => {
  //       const doc = new jsPDF.default(0, 0);
  //       doc.autoTable(this.exportColumns, this.products);
  //       doc.save('products.pdf');
  //     })
  //   })
  // }
  ngOnInit(): void {
  }

}
