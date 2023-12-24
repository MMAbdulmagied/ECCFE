import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '', redirectTo: '', pathMatch: 'full'
},
{ path: 'customers', loadChildren: () => import('./Components/Customers/customer.module').then(m => m.CustomersModule) },
{ path: 'certificates', loadChildren: () => import('./Components/Certificates/certificate.module').then(m => m.CertificatesModule) },
{ path: 'complains', loadChildren: () => import('./Components/Complains/complain.module').then(m => m.ComplainsModule) },
{ path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
