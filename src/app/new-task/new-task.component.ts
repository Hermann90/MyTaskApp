import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/services/authentication.services";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  task:any;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  /**
   * Create new task
   */
   onSaveTask(task:any){
     this.authService.saveTask(task)
          .subscribe(resp=>{
            this.task = resp;
            console.log(task+" : created !!!")
          },
          err =>{
            console.log("error create Task !!!")
          })
   }
}
