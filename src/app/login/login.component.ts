import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mode:number=0;
  // --- injection of these services ---//
  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * implementation of the onLogin function
   */
  onLogin(user: any){
    console.log(user)
    this.authService.login(user)
      .subscribe(resp=>{
        // ---- response service. recover token ---//
        let jwt = resp.headers.get('Authorization');
        //--- call service and save token to localStorage ---//
        if(jwt != null){
          this.authService.saveToken(jwt);
          this.router.navigateByUrl("/tasks");
        }
      },
      err=>{
        this.mode = 1;
        console.log("Error Login")
      })

  }
}
