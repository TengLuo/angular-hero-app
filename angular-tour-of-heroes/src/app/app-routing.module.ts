import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TestpageComponent } from './testpage/testpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'test', component: TestpageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
