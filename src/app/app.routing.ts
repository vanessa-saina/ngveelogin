import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/index';
//import { HomeComponent } from './components/home/index';
import { AuthGuard } from './guards/index';
import { LecturerComponent } from './components/lecturer/index';
import { StudentsComponent } from './components/students/index';
import { AdminComponent } from './components/admin/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
    { path: 'lecturers', component: LecturerComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

    // otherwise redirect to login
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
