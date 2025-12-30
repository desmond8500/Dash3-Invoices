import { Component } from '@angular/core';
import { ScrollspyDirective } from '../../../core/diractive/scrollspy.directive';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
    selector: 'app-advance-ui-scrollspy',
    imports: [ScrollspyDirective, PageTitleComponent, CommonModule,BsDropdownModule],
    templateUrl: './advance-ui-scrollspy.component.html',
    styleUrl: './advance-ui-scrollspy.component.scss'
})
export class AdvanceUiScrollspyComponent {

  currentSection = 'fat';

  // bread crum items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'ScrollSpy', active: true }];
  }


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor() { }
}
