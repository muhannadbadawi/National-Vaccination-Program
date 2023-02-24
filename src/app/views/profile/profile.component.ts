import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/app-services/shared.service';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public service:SharedService) { 
    service.SetUser();
  }
  name :string=getCookie("name")
  ngOnInit(): void {
  }

}
