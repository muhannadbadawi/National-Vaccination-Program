import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../app-services/shared.service';

@Component({
  selector: 'app-aside-parent',
  templateUrl: './aside-parent.component.html',
  styleUrls: ['./aside-parent.component.scss']
})
export class AsideParentComponent implements OnInit {

  constructor(public service:SharedService) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.logout()
  }
}
