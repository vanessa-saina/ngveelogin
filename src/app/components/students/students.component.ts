import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl,Validators } from '@angular/forms';

import { User } from '../../models/index';
import { Students } from '../../models/index';
import { Lecturer } from '../../models/index';
import { UserService } from '../../services/index';
import { StudentsService } from '../../services/index';
import {Eval} from '../../models/eval';
import {EvaluationService} from '../../services';
import swal from 'sweetalert';



@Component({
    moduleId: module.id,
    templateUrl: 'students.component.html'
})

export class StudentsComponent implements OnInit {
  //  users: User[] = [];
   studentss: Students[] = [];
   lecturers: Lecturer[] = [];
   m_eval: Eval ;

  student_id: string;
 lecturer_id: string;
  unit_id: string;

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
 constructor(private studentsService: StudentsService, private fb: FormBuilder, private evaluationService: EvaluationService) { }

    ngOnInit() {
        // get users from secure api end point
    /*    this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
*/
this.myForm = this.fb.group({
  student_id: [''],
  lecturer_id: [''],
  unit_id: [''],
    comments: [''],
  recommendation: [''],
    questions: this.fb.array([
    ])
  });

  for (let q of this.qat.questions){
    //  this.initAddress2(c);
      this.addQuestion(q.quiz, q.category);


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
    initQuestion(question: String, category: String) {
        return this.fb.group({
            rating: ['', Validators.required],
            category: [category],
            question: [question]
        });
    }
    addQuestion(q: String, c: String) {
        const control = <FormArray>this.myForm.controls['questions'];
        control.push(this.initQuestion(q, c));
     //  console.log("Arrya: ", control.value);
    }
    registerUser(form) {
        console.log(JSON.stringify(form));
        // {email: '...', password: '...'}
        // ... <-- now use JSON.stringify() to convert form values to json.
      }
      submit() {
        this.myForm.value.student_id = this.student_id;
        this.myForm.value.lecturer_id = this.lecturer_id;
        this.myForm.value.unit_id = '23d0e9f678fc4162a960a4c26a11c2b4';

        this.evaluationService.create_evaluation(JSON.stringify(this.myForm.value)).subscribe(result => {

          if (result === true) {
            swal("Done!", "You have Evaluated the lecture!", "success");
          }else {
          }
          swal("Done!", "You have Evaluated the lecture!", "success");
        });
        console.log("Reactive Form submitted: ", JSON.stringify(this.myForm.value) );


     //  this. addAddress();
      }
  sendEval(index: number) {
    console.log("Eval_index: ", this.lecturers[index].id );
   this.lecturer_id = this.lecturers[index].id;
   this.student_id = this.user.id;
    console.log("Eval: ", this.lecturer_id + this.student_id );
  }
}

