import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../services/authentication.service';
import { Students } from '../models/index';
import { Lecturer } from '../models/index';

@Injectable()
export class StudentsService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getStudentss(): Observable<Students[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'token ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:4200/services/get_students/', options)
            .map((response: Response) => response.json());
    }

    getLectures(): Observable<Lecturer[]> {
        // add authorization header with jwt token
      //  let headers = new Headers({ 'Authorization': 'token ' + this.authenticationService.token });
      //  let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:8000/users/view_lecturers/')
            .map((response: Response) => response.json());
    }
}
