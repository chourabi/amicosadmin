import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels=[];
  constructor(private app:AppService) { }

  ngOnInit(): void {
    this.getHotelsList();
  }


  getHotelsList(){
    this.app.getHotelsList().subscribe((data)=>{
      console.log(data);
      
      this.hotels=data;

      
    },(error)=>{
      alert('something went wrong, try again');
    })
  }

}
