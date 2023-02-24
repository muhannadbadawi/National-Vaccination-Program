import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

//import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
  
})


export class SupportComponent implements OnInit {

  constructor() { 
    
  }

  
  
  ngOnInit(): void {

    
  }

    t1="Registration"
    t2="The date of receiving the vaccination"
    t3="At the time of vaccination"
    t4="Vaccination certificate"
    t5="Report side effects"
    
    box0="If you already have an account please click the signup button and fill in the required fields, if not please refer to the text below ."
    box1="1. Enter the Jordanian national number or The personal number for non-Jordanians and the full name and family book number, password, province."
    box11="2. Enter the email that will be Send the authentication code to it."
    box111="3. Enter the authentication code that arrives to the email you entered, And press the confirmation button, it will Activate your account."
    
    box2="1. You will receive a notification that includes a location And the time/date of receiving the vaccines."
    box22="2. The place and date of taking the vaccines is According to your choices of location and date"
    
    box3="It is necessary to come a little before the appointment and bring the personal identification card for Jordanians and the passport for others, in addition to the family book."
    box33="The vaccination team will guide you with the instructions for the second dose, depending on the type of vaccine."
    
    box4="Upon receiving the necessary doses of vaccines, a certificate will be printed."
    box44="The vaccinations are confirmed and can be accessed through the website."
    
    box5="1. You can click on the call support button on the page in the event that there are any foreign symptoms or when you need any help."
    box55="2. All types of vaccines used in the vaccination campaign have been proven to be safe, but procedures require that there be a mechanism for reporting any side effects that may result from the vaccine."



    
    opensweetalertCall(){
      Swal.fire({
        icon: 'info',
        title: "<b >Useful numbers</b>",
        html:
        '<b style = "color:rgba(79,192,210,1);" >Ministry of Health :</b> 0096265200230  <br><br><hr><br> ' +
        '<a href="https://moh.gov.jo/ar/Amman/InfoPageDaynamic/28/146" target="_blank">a certain health center number</a><br> <br><hr><br>' +
        '<b style = "color:rgba(79,192,210,1);">website support number :</b> 1234567891<br>',
        showConfirmButton: false,
        
      })
    }
  }
