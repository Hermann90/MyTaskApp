import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()// ---- For inject the service on other class
export class AuthenticationService{
    
    private host:string="http://localhost:8080";
    private jwtToken:any=null;
    private roles:Array<any> = new Array();

    constructor(private http :HttpClient){

    }
    login(user:any){
        return this.http.post(this.host+"/login",user, {observe:"response"});
    }

    /**
     * save token on local storage
     */
    saveToken(jwt:string){
        this.jwtToken = jwt;
        if(jwt != null){
            localStorage.setItem('token',jwt);
            // --- decode roles using token ---//
            let jwtHelper = new JwtHelperService();
            this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
        }
    }

    /**
     * recover token variable
     */
    loadToken(){
        this.jwtToken = localStorage.getItem('token');        
    }

    /**
     * get all taska
     */
    getTasks(){
        if(this.jwtToken == null){
            this.loadToken();
        }
        return this.http.get(this.host+"/tasks",
        {headers:new HttpHeaders({'Authorization':this.jwtToken})})
    }

    /**
     * destroy expired tokek
     */
    logout(){
        this.jwtToken=null;
        localStorage.removeItem('token');
    }

    /**
     * check if user have the ADMIN role. here we can use jwt
     */
    isAdmin(){
        for(let r of this.roles){
            if(r.authority == 'ADMIN') return true;
        }
    return false;
    }

    /**
     * Save new task service
     */
     saveTask(task:any){
         return this.http.post(this.host+"/tasks", task, 
         {headers:new HttpHeaders({'Authorization':this.jwtToken})});
     }
}