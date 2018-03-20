import { Component, OnInit } from '@angular/core';

import { User, Admin } from '../../models/index';
import { UserService } from '../../services/index';
import { AdminService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
  //  users: User[] = [];
   admins: Admin[] = [];
  user: User = JSON.parse(localStorage.getItem('currentUser'));
  //  constructor(private userService: UserService) { }
 constructor(private adminService: AdminService) { }
    ngOnInit() {
        // get users from secure api end point
    /*    this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
*/
localStorage.getItem('currentUser');
            this.adminService.getAdmins()
                .subscribe(admins => {
                    this.admins = admins;
                });

    }

}
