import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  hiddenProfile = false;
  userData = {
    'name': 'Kiran Golla',
    'role': 'Software Developer'
  };
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  @Input() routes: Array<object>;
  constructor(private breakpointObserver: BreakpointObserver, private user: UserService) { }
 
  logOutApp() {
    this.user.removeAuth();
  }

}
