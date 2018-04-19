import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { AuthenticationService } from '../services/authentication.service';
import { Students } from '../models/index';
import { Lecturer } from '../models/index';


@Injectable()
export class EvaluationService {


  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }


  create_evaluation(evaluation: string):  Observable<boolean>  {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'token ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.post('http://127.0.0.1:8000/evaluation/create_evaluation/', evaluation, options)
      .map((response: Response) => response.json());
  }


}
