import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient ) { }

  getHotelsList( ):Observable<any>{
    const accessToken = window.localStorage.getItem("accessToken");
    const tokenType = window.localStorage.getItem("tokenType");
    
    return this.http.get(environment.api+"/api/hotel/list",{headers:{
      "Authorization": tokenType+" "+accessToken,
      "Content-Type": "application/json"
    }})
  }

  addNewHotel(name,nbrStars,address,hasPool,hasParking,hasWifi,imgURL):Observable<any>{

    const accessToken = window.localStorage.getItem("accessToken");
    const tokenType = window.localStorage.getItem("tokenType");
    
    return this.http.post(environment.api+"/api/hotel/add",{
      "name":name,
      "nbrStars":nbrStars,
      "address":address,
      "hasPool":hasPool,
      "hasParking":hasParking,
      "hasWifi":hasWifi,
      "imageURL":imgURL

    },{headers:{
      "Authorization": tokenType+" "+accessToken,
      "Content-Type": "application/json"
    }})
  }



  public getAllReservations(){
    const accessToken = window.localStorage.getItem("accessToken");
    const tokenType = window.localStorage.getItem("tokenType");
    
    return this.http.get(environment.api+"/api/hotelReservation/all",{headers:{
      "Authorization": tokenType+" "+accessToken,
      "Content-Type": "application/json"
    }})
  }


  public changeReservationStat(id,stat){
    const accessToken = window.localStorage.getItem("accessToken");
    const tokenType = window.localStorage.getItem("tokenType");
    
    return this.http.post(environment.api+"/api/hotelReservation/update",{
      "idReservation":id,
      "stat":stat

    },{headers:{
      "Authorization": tokenType+" "+accessToken,
      "Content-Type": "application/json"
    }})
  }


}
