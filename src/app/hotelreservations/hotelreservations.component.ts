import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-hotelreservations',
  templateUrl: './hotelreservations.component.html',
  styleUrls: ['./hotelreservations.component.css']
})
export class HotelreservationsComponent implements OnInit {

  reservations=[];
  constructor(private api:AppService) { }

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations(){
    this.api.getAllReservations().subscribe((data:any)=>{
      this.reservations=data;
    },(error)=>{
      alert("Somthing went wrong, try again.")
    })
  }


  changeStat(id,stat){
    this.api.changeReservationStat(id,stat).subscribe((data)=>{
      this.getAllReservations();
    })
    
  }

}
