import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { MatIcon } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routesForHeader: Array<object> = [{
    'path': 'welcome',
    'name': 'Welcome'
  }, {
    'path': 'admin',
    'name': 'Admin'
  }];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


}
