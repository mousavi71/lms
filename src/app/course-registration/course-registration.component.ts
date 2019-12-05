import {Component, Input, OnInit} from '@angular/core';
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.scss']
})
export class CourseRegistrationComponent implements OnInit {
  @Input()mt: string;
  @Input()label: string;
  @Input()date: string;
  @Input()time: string;
  faCalendar = faCalendar;
  faClock = faClock;
  constructor() { }

  ngOnInit() {
  }

}
