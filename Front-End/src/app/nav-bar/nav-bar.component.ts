import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  connectionStatus;
key;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(localStorage);
    if (localStorage.length > 0) {
      this.connectionStatus = true;
    } else {
      this.connectionStatus = false;
    }
  }
  onLogOut() {
localStorage.clear();
console.log(localStorage);

  }
}
