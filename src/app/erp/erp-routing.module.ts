import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicespageComponent } from './invoicespage/invoicespage.component';

const routes: Routes = [
  {
    path: 'invoices', component: InvoicespageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }
