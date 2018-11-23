import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewReglaComponent } from './components/new-regla/new-regla.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'new',
    component: NewReglaComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
