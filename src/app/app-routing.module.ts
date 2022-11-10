import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BankingProfileComponent } from './banking-app/banking-profile/banking-profile.component';
import { BankingSignupComponent } from './banking-app/banking-signup/banking-signup.component';
import { TransactionScannerComponent } from './banking-app/transaction-scanner/transaction-scanner.component';
import { TransferTransactionComponent } from './banking-app/transfer-transaction/transfer-transaction.component';
import { WelcomeBankingComponent } from './banking-app/welcome-banking/welcome-banking.component';
import { AuthGuard } from './banking-app/shared/shared/auth.guard';
import { ForgotPasswordComponent } from './banking-app/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'banking',
    component: WelcomeBankingComponent,
    data: { animationState: 'bankingLogin' }
  },
  {
    path: 'forgotPass',
    component: ForgotPasswordComponent,
    data: { animationState: 'bankingForgotPass' }
  },
  {
    path: 'banking-signup',
    component: BankingSignupComponent,
    data: { animationState: 'BankingSignup' }
  },
  {
    path: 'transactions',
    component: BankingProfileComponent,
    canActivate: [AuthGuard],
    data: { animationState: 'LatestTransactions' }
  },
  {
    path: 'fund-transfer',
    component: TransferTransactionComponent,
    canActivate: [AuthGuard],
    data: { animationState: 'TransferTransactions' }
  },
  {
    path: 'scanner',
    component: TransactionScannerComponent,
    canActivate: [AuthGuard],
    data: { animationState: 'TransactionScanner' }
  },
  {
    path: '',
    redirectTo: '/banking',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:WelcomeBankingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
