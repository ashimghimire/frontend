import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  bookings:any;
  loaded:Boolean=false;
  amount:any;
  user:any
  constructor(public api:ApiService, public activatedRoute: ActivatedRoute, @Inject(DOCUMENT) private doc: Document ) {
    this.user=JSON.parse("" + localStorage.getItem("user"));
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{
      this.api.getBooking$(params.id).subscribe((bookings)=>{
        //console.log(bookings);
        this.bookings=bookings;
        this.api.getAmount$(bookings).subscribe((amount)=>{
          //console.log(amount);
          this.amount=amount;  
          this.loaded=true;      
        })
      })
   })
  }

  addPayment(){
    
    let payment={
      bookingId:this.bookings.id,
      totalCost:this.amount.amount+"",
      status:''
    }
    
    this.api.addPayment$(payment).subscribe((res)=>{
      this.doc.location.replace(`/checkout/${res.bookingId}`);
    })
  }

}
