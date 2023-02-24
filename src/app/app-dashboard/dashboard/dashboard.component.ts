import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/app-services/shared.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  constructor(public service:SharedService,private router: Router) {
    this.loadData();
    if(localStorage.getItem("ID")=="null"){
      this.router.navigateByUrl('../');
     }
  }
  parent=false;
  admin=false;
  health=false;
  
  city: any;
 
  ngOnInit(): void {    
   this.service.SetFBN()
    if(localStorage.getItem("ID")=="null"){
      this.router.navigateByUrl('../signup');
     }
  
  }
  title='material-demo';
  notifications=0;
  showSpinner=false;
  loadData(){
    if(localStorage.getItem("type")=="3"){this.parent=true}
    if(localStorage.getItem("type")=="1"){this.admin=true}
    if(localStorage.getItem("type")=="2"){this.health=true}
    // removeCookie("type")
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },1000)
  }
  

}
