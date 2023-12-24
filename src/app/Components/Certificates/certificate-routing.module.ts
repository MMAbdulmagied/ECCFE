import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import { NewCertificateComponent } from './new-certificate/new-certificate.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CertificatesListComponent
      },
      { path: 'newCertificate', component: NewCertificateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatesRoutingModule { }
