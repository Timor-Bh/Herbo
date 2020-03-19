import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  connectionStatus;
  title = 'Front-End';
  ngOnInit() {
    console.log(localStorage);
    if (localStorage.length > 0) {
      this.connectionStatus = true;
    } else {
      this.connectionStatus = false;
    }
  }
}
