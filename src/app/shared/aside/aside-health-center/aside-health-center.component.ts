import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../app-services/shared.service';

@Component({
  selector: 'app-aside-health-center',
  templateUrl: './aside-health-center.component.html',
  styleUrls: ['./aside-health-center.component.scss']
})
export class AsideHealthCenterComponent implements OnInit {

  constructor(public service:SharedService) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.logout()
  }
}
