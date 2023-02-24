import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../app-services/shared.service';

@Component({
  selector: 'app-aside-admin',
  templateUrl: './aside-admin.component.html',
  styleUrls: ['./aside-admin.component.scss']
})
export class AsideAdminComponent implements OnInit {

  constructor(public service:SharedService) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.logout()
  }
}
