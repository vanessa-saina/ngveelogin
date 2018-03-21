import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../services/authentication.service';
import { Lecturer } from '../models/index';

@Injectable()
export class LecturerService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getLecturers(): Observable<Lecturer[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'token ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:4200/services/get_students/', options)
            .map((response: Response) => response.json());
    }
}
