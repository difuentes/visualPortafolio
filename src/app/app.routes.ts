import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login'},
  { path: '', component: LoginComponent  },
  { path: 'login', component: LoginComponent  }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
