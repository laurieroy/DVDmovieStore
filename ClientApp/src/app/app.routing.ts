import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutSummaryComponent } from './store/checkout/checkoutDetails/checkout-summary/checkout-summary.component';
import { CheckoutDetailsComponent } from './store/checkout/checkoutDetails/checkoutDetails.component';
import { CheckoutPaymentComponent } from './store/checkout/checkoutDetails/checkoutPayment/checkoutPayment.component';
import { OrderConfirmationComponent } from './store/checkout/checkoutDetails/orderConfirmation/orderConfirmation.component';
import { MovieSelectionComponent } from './store/movie-selection/movie-selection.component';


const routes: Routes = [
  {path: 'checkout/step1', component: CheckoutDetailsComponent },
  {path: 'checkout/step2', component: CheckoutPaymentComponent },
  {path: 'checkout/step3', component: CheckoutSummaryComponent },
  {path: 'checkout/confirmation', component: OrderConfirmationComponent },
  {path: 'checkout', component: CheckoutDetailsComponent },
  {path: 'cart', component: CartDetailComponent},
  {path: 'store', component: MovieSelectionComponent},
  {path: '', component: MovieSelectionComponent}
];

export const RoutingConfig = RouterModule.forRoot(routes);
