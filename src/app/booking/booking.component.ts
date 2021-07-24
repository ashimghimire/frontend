import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookings={
    from:'',
    to:'',
    trip:'',
    depart:'',
    passenger:'',
    cabin:'',
    return:''
  }
  constructor(public api:ApiService, @Inject(DOCUMENT) private doc: Document ) { 
     
  }

  postBooking(){
    this.api.addBooking$(this.bookings).subscribe({
      next: (res) => {
          console.log(res);
          this.doc.location.replace(`/bookings/${res.id}`)
      },
      error: (e) => console.log(e),
    }

    )
  }

  ngOnInit(): void {
  }

}
