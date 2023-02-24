import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/app-services/admin.service';
import { SharedService } from 'src/app/app-services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {

  constructor(public service: AdminService,sharedService:SharedService) {
    sharedService.SetFBN();
    service.getAllParent();
  }
 
  fillData(item: any) {
    this.service.parent.id = item.id;
    this.service.parent.name = item.name;
    this.service.parent.familyBookNumber = item.familyBookNumber;
    this.service.parent.email = item.email;
  }
  details(id: string) {

  }
  reservation(id: string) {
    Swal.fire(
      'Reservation ',
      'Done',
      'success'
    )
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
