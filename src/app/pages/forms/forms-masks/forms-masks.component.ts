import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
    selector: 'app-forms-masks',
    imports: [PageTitleComponent, NgxMaskDirective],
    templateUrl: './forms-masks.component.html',
    styleUrl: './forms-masks.component.scss'
})
export class FormsMasksComponent {

  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Input Masks', active: true }];
  }
}
