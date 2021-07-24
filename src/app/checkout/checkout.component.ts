import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  stripePromise = loadStripe(environment.stripe);
  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{
      
   })
  }
  chargeCreditCard(){
    
  }
  
}
