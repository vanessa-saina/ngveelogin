import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl,Validators } from '@angular/forms';

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
   cat = ["Is the Teacher crazy","Teaching skills sexy","Twerking level","Sing well"];
   qat = {
     "questions": [{
       "quiz": "Sets stimulating learning atmosphere",
       "category": "presentation"
     }, {
       "quiz": "Use relevant examples illustrations to explain principles and concepts",
       "category": "presentation"
     }, {
       "quiz": "Encourage and appreciates students participation",
       "category": "presentation"
     }, {
       "quiz": "Presents contents logically and coherently",
       "category": "presentation"
     }, {
       "quiz": "Involve students actively(through questioning,answering,discussion etc)",
       "category": "presentation"
     }, {
       "quiz": "Delivers content in motivating manner",
       "category": "presentation"
     }, {
       "quiz": "Uses relevant teaching aids(chalk board,projector,lab,apparatus)",
       "category": "presentation"
     }, {

       "quiz": "Provides a clear summary of concepts/principles covered in the lesson",
       "category": "presentation"
     }, {

       "quiz": "Voice clear and audible",
       "category": "presentation"
     }, {
       "quiz": "Clear introduction of course objectives and relevancies",
       "category": "subject_matter"
     }, {
       "quiz": "Demonstrate mastery of subject matter",
       "category": "subject_matter"
     },
       {
         "quiz": "Adequately covers course outline within the specified time",
         "category": "subject_matter"
       }, {
         "quiz": "Depth of subject coverage(indepth as opposed to superficial treatment)",
         "category": "subject_matter"
       },
       {
         "quiz": "Provide guidance to relevant references",
         "category": "subject_matter"
       }, {
         "quiz": "Subject matter relevance to course(as per course outline)",
         "category": "subject_matter"
       },
       {
         "quiz": "Assignments(relevant and useful)",
         "category": "subject_matter"
       }, {
         "quiz": "Gives adequate and relevant assignments/CATs",
         "category": "subject_matter"
       }, {
         "quiz": "Provides feedback of assignents/CATs promptly",
         "category": "subject_matter"
       },{
         "quiz": "Attendance/pantuality",
         "category": "personal"
       }, {
         "quiz": "Interaction with students(friendly,approachable,caring,tolerant)",
         "category": "personal"
       }, {
         "quiz": "Availability of lecturer for consultations",
         "category": "personal"
       },{
         "quiz": "Extent to which the consultations are helpful",
         "category": "personal"
       },{
         "quiz": "Confident in presentation and subject matter",
         "category": "personal"
       },{
         "quiz": "Adequate lecture room preparation",
         "category": "personal"
       },{
         "quiz": "Students control/class discipline",
         "category": "personal"
       }
     ]
   };
  user: User = JSON.parse(localStorage.getItem('currentUser'));
  myForm: FormGroup;
  //  constructor(private userService: UserService) { }
 constructor(private studentsService: StudentsService, private fb: FormBuilder) { }

    ngOnInit() {
        // get users from secure api end point
    /*    this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
*/
this.myForm = this.fb.group({
    evaluation_id:["", Validators.required],
    comments:["", Validators.required],
  recommendation:["", Validators.required],
    questions: this.fb.array([
    ])
  });

  for (let q of this.qat.questions){
    //  this.initAddress2(c);
      this.addQuestion(q.quiz);


  }

localStorage.getItem('currentUser');
            this.studentsService.getStudentss()
                .subscribe(studentss => {
                    this.studentss = studentss;
                });
                this.studentsService.getLectures()
                .subscribe(Lecturer => {
                 //   alert("News Success");
                    this.lecturers = Lecturer;
                    console.log('res is ', Lecturer);
                });


    }
    initAddress() {
        return this.fb.group({
            rating: ['', Validators.required]
        });
    }
    initQuestion(question: String) {
        return this.fb.group({
            rating: ['', Validators.required],
            question: [question]
        });
    }
    addQuestion(q: String) {
        const control = <FormArray>this.myForm.controls['questions'];
        control.push(this.initQuestion(q));
     //  console.log("Arrya: ", control.value);
    }
    registerUser(form) {
        console.log(JSON.stringify(form));
        // {email: '...', password: '...'}
        // ... <-- now use JSON.stringify() to convert form values to json.
      }
      submit() {
        console.log("Reactive Form submitted: ", JSON.stringify(this.myForm.value) );
     //  this. addAddress();
      }

}

