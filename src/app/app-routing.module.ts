import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StadiumComponent } from './stadium/stadium.component';

const routes: Routes = [
  { path:'stadium', component : StadiumComponent },
  { path:'', redirectTo:'/stadium', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
