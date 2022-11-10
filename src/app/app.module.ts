import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
//import { NgxBarcodeModule } from 'ngx-barcode';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthService } from './banking-app/shared/shared/userAuth.service';
import { BankingHeaderComponent } from './banking-app/common/header/banking-header.component';
import { WelcomeBankingComponent } from './banking-app/welcome-banking/welcome-banking.component';
import { BankingSignupComponent } from './banking-app/banking-signup/banking-signup.component';
import { UserSignupService } from './banking-app/shared/user-signup.service';
import { ValidationMessageComponent } from './banking-app/common/validation-message/validation-message.component';
import { BankingProfileComponent} from './banking-app/banking-profile/banking-profile.component';
import { TransferTransactionComponent } from './banking-app/transfer-transaction/transfer-transaction.component';
import { TransactionScannerComponent } from './banking-app/transaction-scanner/transaction-scanner.component';
import { AddHeaderInterceptorService } from './core/add-header-interceptor.service';
import { ForgotPasswordComponent } from './banking-app/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    BankingHeaderComponent,
    WelcomeBankingComponent,
    BankingSignupComponent,
    ValidationMessageComponent,
    BankingProfileComponent,
    TransferTransactionComponent,
    TransactionScannerComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    QRCodeModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //NgxBarcodeModule
  ],
  providers: [
    UserAuthService,
    UserSignupService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
