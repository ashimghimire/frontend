import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
  }
  
  pingApi() {
    this.api.ping$().subscribe({
      next: (res) => {
       console.log(res);
       console.log("3333");
      },
      error: (e) => console.log(e),
    });
  }

}
