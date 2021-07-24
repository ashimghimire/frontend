import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { AuthGuard } from '@auth0/auth0-angular';
import {SuccessComponent} from './success/success.component';
import {CancelComponent} from './cancel/cancel.component';
import {CheckoutComponent} from "./checkout/checkout.component";
const routes: Routes = [{
  path: '',
  component: HomeComponent,
  },{
  path:"bookings",
  component:BookingComponent,
  canActivate: [AuthGuard],
  },{
  path:"bookings/:id",
  component:PaymentsComponent,
  canActivate: [AuthGuard],
  },
  { path: 'checkout/:bookingId',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  { path: 'cancel', component: CancelComponent, canActivate: [AuthGuard] },
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
