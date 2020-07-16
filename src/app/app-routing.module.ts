import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { HotelsComponent } from './hotels/hotels.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { HotelreservationsComponent } from './hotelreservations/hotelreservations.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'hotels', component: HotelsComponent },
      { path: 'addhotel', component: AddhotelComponent },
      { path: 'hotelsreservations', component : HotelreservationsComponent }
      
      
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
