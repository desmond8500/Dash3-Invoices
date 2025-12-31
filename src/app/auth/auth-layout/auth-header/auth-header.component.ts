import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainService } from '../../../services/main.service';

@Component({
    selector: 'app-auth-header',
    imports: [RouterModule],
    templateUrl: './auth-header.component.html',
    styleUrl: './auth-header.component.scss'
})
export class AuthHeaderComponent {
  main = inject(MainService);

  logo = this.main.logo_transparent;
}
