import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  addHotelForm = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    nbrStars: new FormControl('',Validators.required),
    imgurl: new FormControl('',Validators.required),
    hasPool: new FormControl(false,Validators.required),
    hasParking: new FormControl(false,Validators.required),
    hasWifi: new FormControl(false,Validators.required),
    
  })
  constructor(private api:AppService,private router:Router) { }

  ngOnInit(): void {
  }

  addHotel(){
    this.api.addNewHotel(
      this.addHotelForm.value.name,
      this.addHotelForm.value.nbrStars,
      this.addHotelForm.value.address,
      this.addHotelForm.value.hasPool,
      this.addHotelForm.value.hasParking,
      this.addHotelForm.value.hasWifi,
      this.addHotelForm.value.imgurl
      ).subscribe((data)=>{
        if (data.id) {
          this.router.navigate(['dashboard/hotels'])
        }else{
          alert("somthing went wrong, try again.")
        }
        
      },(error)=>{
        alert("somthing went wrong, try again.")
      })
    
    
  }

}
