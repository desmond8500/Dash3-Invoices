import { Component, inject } from '@angular/core';
import { MainService } from '../services/main.service';
import { ErpRoutingModule } from "./erp-routing.module";
import { RouterLink } from '@angular/router';
import { InvoicespageComponent } from './invoicespage/invoicespage.component';

@Component({
  selector: 'app-erp',
  imports: [ErpRoutingModule, InvoicespageComponent],
  templateUrl: './erp.component.html',
  styleUrl: './erp.component.scss',
})
export class ErpComponent {
  main_service = inject(MainService);



}
