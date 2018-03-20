import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }


    login() {
        this.loading = true;
          this.error = 'Username or password is incorrect';
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {

                if (result === true) {
                    // login successful
                    let user = JSON.parse(localStorage.getItem('currentUser'));
                    if(user.role=="student"){
                  //  this.router.navigate(['/student']);
                    this.router.navigate(['/']);
                  }else{
                        this.router.navigate(['/']);
                  }
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
