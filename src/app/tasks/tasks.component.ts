import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.services';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  task:any
  // --- Inject services here ---//
  constructor(public authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.authService.getTasks()
      .subscribe(data=>{
        this.task = data;  
      },
      err=>{
        // --- it looks like you are not authorized or your token has expired ---//
        this.authService.logout();
        this.router.navigateByUrl("/login");
      })
  }

  /**
   * perform new task creation with the onNewTask() function
   */
   onNewTask(){
     this.router.navigateByUrl("/new-task")
   }

}
