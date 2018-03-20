import { Component, OnInit } from '@angular/core';


import { User } from '../../models/index';
import { Payer } from '../../models/index';
import { Lecturer } from '../../models/index';
import { UserService } from '../../services/index';
import { PayerService } from '../../services/index';
import { LecturerService } from '../../services/index';

@Component({
  moduleId: module.id,
  //selector: 'app-lecturer',
  templateUrl: './lecturer.component.html'
  //styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {


  //  users: User[] = [];
   lecturers: Lecturer[] = [];
  user: User = JSON.parse(localStorage.getItem('currentUser'));
  //  constructor(private userService: UserService) { }
 constructor(private lecturerService: LecturerService) { }
    ngOnInit() {
        // get users from secure api end point
    /*    this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
*/
localStorage.getItem('currentUser');
            this.lecturerService.getLecturers()
                .subscribe(lecturers => {
                    this.lecturers = lecturers;
                });

    }


}


