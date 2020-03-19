import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Models/Order';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  History : Order[]


  ngOnInit() {
    this.http.post('http://localhost:8118/history', {
      currentId: JSON.parse(localStorage.getItem('user'))['result']["_id"]
    }).subscribe(result => {
      console.log(result);
      if (result["result"]) {

      } else {
         
      }



    })
  }

}
