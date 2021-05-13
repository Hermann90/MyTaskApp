import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyTaskApp';

  // --- constructor can get services injection ---//
  constructor(private authService:AuthenticationService, private router:Router){}

  /**
   * onLogout is fuction that perform disconnexion on the App
   */
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
