import { Component, inject, resource, signal } from '@angular/core';
import { MainService } from '../../services/main.service';
import { InvoiceCardComponent } from '../invoice-card/invoice-card.component';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoicespage',
  imports: [InvoiceCardComponent],
  templateUrl: './invoicespage.component.html',
  styleUrl: './invoicespage.component.scss',
})
export class InvoicespageComponent {
  main_service = inject(MainService);
  invoice_service = inject(InvoiceService);
  title = signal('');

  factures = signal<any>('');
  deposits = signal<any>('');

  months = [
    { label: 'Janvier', value: 1 },

    { label: 'Février', value: 2 },

    { label: 'Mars', value: 3 },

    { label: 'Avril', value: 4 },

    { label: 'Mai', value: 5 },

    { label: 'Juin', value: 6 },

    { label: 'Juillet', value: 7 },

    { label: 'Août', value: 8 },

    { label: 'Septembre', value: 9 },

    { label: 'Octobre', value: 10 },

    { label: 'Novembre', value: 11 },

    { label: 'Décembre', value: 12 },
  ];

  getMonth(month: any, year: number) {
    this.invoice_service.get_invoices(month, year).subscribe({
      next: (value) => {
        this.factures.set(value);
        //  console.log('facture' + value);
        this.title.set(this.months[month - 1].label);
      },
      error: (err) => console.error(err),
      // complete: () => console.log('DONE!'),
    });

  }

  get_month_deposit(){
    this.invoice_service.get_deposit(1, 2025).subscribe({
      next: (value) => {
        this.factures.set([]);
        this.deposits.set(value);
        console.log('deposit' + value);
      },
      error: (err) => console.error(err),
    });

  }
}
