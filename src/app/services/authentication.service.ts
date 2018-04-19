import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public token: string;
    public name: string;
    public institute: string;
  //  public endpoint: string;
  //   endpoint: string = 'http://138.68.172.136:8001';
      endpoint: string = 'http://127.0.0.1:8000';
     private headers = new Headers({
'Access-Control-Allow-Origin': '*',
'Content-Type': 'application/json',
'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
});


    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.endpoint+'/users/login/', JSON.stringify({ username: username, password: password }), {headers: this.headers})
        //return this.http.post(this.endpoint+'/users/login/', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let id = response.json() && response.json().id;
                let role = response.json() && response.json().role;
                let institute = response.json() && response.json().institute;
                let person_name = response.json() && response.json().name;

                if (token) {
                    // set token property
                    this.token = token;
                    //    { name: name, token: token, role: role, institute: institute }

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser',  JSON.stringify({ id: id, username: username, token: token,  name: person_name, role: role, institute: institute }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
