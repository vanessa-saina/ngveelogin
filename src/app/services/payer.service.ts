import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../services/index';
import { Payer } from '../models/index';

@Injectable()
export class PayerService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getPayers(): Observable<Payer[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'token ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://138.68.172.136:8001/services/get_payers/', options)
            .map((response: Response) => response.json());
    }
}
