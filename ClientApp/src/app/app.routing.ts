import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { AdminComponent } from './admin/admin.component';
import { MovieAdminComponent } from './admin/movie-admin/movie-admin.component';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';
import { OverviewComponent } from './admin/overview.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutSummaryComponent } from './store/checkout/checkoutDetails/checkout-summary/checkout-summary.component';
import { CheckoutDetailsComponent } from './store/checkout/checkoutDetails/checkoutDetails.component';
import { CheckoutPaymentComponent } from './store/checkout/checkoutDetails/checkoutPayment/checkoutPayment.component';
import { OrderConfirmationComponent } from './store/checkout/checkoutDetails/orderConfirmation/orderConfirmation.component';
import { MovieSelectionComponent } from './store/movie-selection/movie-selection.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'movies', component: MovieAdminComponent },
      { path: 'orders', component: OrderAdminComponent },
      { path: 'overview', component: OverviewComponent },
      { path: '', component: OverviewComponent }
    ]
  },
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
