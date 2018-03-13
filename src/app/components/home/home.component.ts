import { Component, OnInit } from '@angular/core';

import { User } from '../../models/index';
import { Payer } from '../../models/index';
import { UserService } from '../../services/index';
import { PayerService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  //  users: User[] = [];
   payers: Payer[] = [];
  user: User = JSON.parse(localStorage.getItem('currentUser'));
  //  constructor(private userService: UserService) { }
 constructor(private payerService: PayerService) { }
    ngOnInit() {
        // get users from secure api end point
    /*    this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
*/
localStorage.getItem('currentUser');
            this.payerService.getPayers()
                .subscribe(payers => {
                    this.payers = payers;
                });

    }

}
