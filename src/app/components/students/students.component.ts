import { Component, OnInit } from '@angular/core';

import { User } from '../../models/index';
import { Payer } from '../../models/index';
import { Students } from '../../models/index';
import { UserService } from '../../services/index';
import { PayerService } from '../../services/index';
import { StudentsService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'students.component.html'
})

export class StudentsComponent implements OnInit {
  //  users: User[] = [];
   studentss: Students[] = [];
  user: User = JSON.parse(localStorage.getItem('currentUser'));
  //  constructor(private userService: UserService) { }
 constructor(private studentsService: StudentsService) { }
    ngOnInit() {
        // get users from secure api end point
    /*    this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
*/
localStorage.getItem('currentUser');
            this.studentsService.getStudentss()
                .subscribe(studentss => {
                    this.studentss = studentss;
                });

    }

}

