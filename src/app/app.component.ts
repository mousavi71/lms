import { Component } from '@angular/core';
import { faSignInAlt, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lms';
  navbarCollapsed = true;
  faSignInAlt = faSignInAlt;
  faUser = faUser;
  faCalendar = faCalendar;
  faClock = faClock;
  faStar = faStar;
  hover: boolean;
  index: number;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
