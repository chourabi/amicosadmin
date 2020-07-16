import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    
  });
  constructor(private auth:AuthService,private router:Router) { }

  connect(){
    this.auth.auth(this.loginForm.value.username,this.loginForm.value.password).subscribe((data)=>{
      if (data.tokenType) {
        window.localStorage.setItem('tokenType',data.tokenType);
        window.localStorage.setItem('accessToken',data.accessToken);
        this.router.navigate(['/dashboard']);
        
      }else{
        alert('Wrong username or password.')
      }
    },(error)=>{
      alert('Something went wrong, try again.')
    })
    
  }

  ngOnInit(): void {
  }

}
