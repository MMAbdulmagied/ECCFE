import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'customers', loadChildren: () => import('./Components/Customers/customer.module').then(m => m.CustomersModule) },
{ path: 'certificates', loadChildren: () => import('./Components/Certificates/certificate.module').then(m => m.CertificatesModule) },
{ path: 'complains', loadChildren: () => import('./Components/Complains/complain.module').then(m => m.ComplainsModule) },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
