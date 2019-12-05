import { Component } from '@angular/core';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarCollapsed = true;
  faSignInAlt = faSignInAlt;
  faUser = faUser;
  faCalendar = faCalendar;
  hover: boolean;
  index: number;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
