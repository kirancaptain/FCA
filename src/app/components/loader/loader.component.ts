import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  hidden = true;
  constructor(public loader: LoadingBarService) { }

  ngOnInit() {
  }

  public show() {
    this.hidden = false;
  }

  public hide() {
    this.hidden = true;
  }

}
