import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainsListComponent } from './complains-list/complains-list.component';
import { NewComplainComponent } from './new-complain/new-complain.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ComplainsListComponent
      },
      { path: 'newComplain', component: NewComplainComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplainRoutingModule { }
