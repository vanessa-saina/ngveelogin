import { Component, OnInit } from '@angular/core';

import { User } from '../../models/index';
import { Students } from '../../models/index';
import { Lecturer } from '../../models/index';
import { UserService } from '../../services/index';
import { StudentsService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'students.component.html'
})

export class StudentsComponent implements OnInit {
  //  users: User[] = [];
   studentss: Students[] = [];
   lecturers: Lecturer[] = [];
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
                this.studentsService.getLectures()
                .subscribe(Lecturer => {
                 //   alert("News Success");
                    this.lecturers= Lecturer;
                    console.log('res is ', Lecturer);
                });

    }

}

