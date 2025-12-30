import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthHeaderComponent } from './auth-layout/auth-header/auth-header.component';
import { AuthFooterComponent } from './auth-layout/auth-footer/auth-footer.component';

@Component({
    selector: 'app-auth',
    imports: [AuthHeaderComponent, AuthFooterComponent, RouterModule],
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

}