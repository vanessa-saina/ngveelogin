import { Component, OnInit } from '@angular/core';


import { User } from '../../models/index';
import { Lecturer } from '../../models/index';
import { UserService } from '../../services/index';
import { LecturerService } from '../../services/index';
import {Eval} from '../../models/eval';

@Component({
  moduleId: module.id,
  //selector: 'app-lecturer',
  templateUrl: './lecturer.component.html'
  //styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {


  //  users: User[] = [];
   lecturers: Lecturer[] = [];
   evaluations: Eval[] = [];
   totalEvaluations = 0;
   totalQuestions = 0;
   totalGood = 0;
   totalBad = 0;
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
      this.lecturerService.getEvaluations(this.user.id)
        .subscribe(Evaluation => {
          this.evaluations = Evaluation;
          console.log('res is ', this.evaluations);
          this.getEval();
        });

    }
  getEval() {
    for (let e of this.evaluations) {
      this.totalEvaluations = this.totalEvaluations + 1;
      console.log(' eval ', 1);
      for (let q of e.questions) {
        this.totalQuestions = this.totalQuestions + 1;
        if (q.rating === '1' || q.rating === '2') {
          this.totalBad = this.totalBad + 1;
        } else {
          this.totalGood = this.totalGood + 1;
        }
      }
    }
    console.log('total eval ', this.totalEvaluations);
  }

}


