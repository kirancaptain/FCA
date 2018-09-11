import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() userDetails: Object;
  @Output() logout = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  logoutApp() {
    this.logout.emit();
  }

}