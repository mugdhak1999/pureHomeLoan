import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncomedetailsComponent } from './incomedetails/incomedetails.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { DocumentsComponent } from './documents/documents.component';
import { FaqComponent } from './faq/faq.component';
import { ApplicationComponent } from './application/application.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PendingComponent } from './pending/pending.component';
import { RejectComponent } from './reject/reject.component';
import { ApprovedComponent } from './approved/approved.component';
import { ClickhereComponent } from './clickhere/clickhere.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { PasswordsuccessfulComponent } from './passwordsuccessful/passwordsuccessful.component';
import { EligibiltycalculatorComponent } from './eligibiltycalculator/eligibiltycalculator.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { LoantrackerComponent } from './loantracker/loantracker.component';

//import { DetailsComponent } from './details/details.component';
//import { PendingtableComponent } from './pendingtable/pendingtable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';  
import { MatDialogModule} from '@angular/material/dialog'  
import { MatCheckboxModule } from '@angular/material/checkbox';  
import { MatSelectModule } from '@angular/material/select';  
import { MatTableModule } from '@angular/material/table';  
import { MatToolbarModule} from '@angular/material/toolbar';



import { ApprovalComponent } from './approval/approval.component';
import { DetailsComponent } from './details/details.component';
import { PendingtableComponent } from './pendingtable/pendingtable.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StatusComponent } from './status/status.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplyComponent,
    IncomedetailsComponent,
    LoandetailsComponent,
    DocumentsComponent,
    FaqComponent,
    ApplicationComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    UserdashComponent,
    AdminloginComponent,
    PendingComponent,
    RejectComponent,
    ApprovedComponent,
    ClickhereComponent,
    RecoverpasswordComponent,
    PasswordsuccessfulComponent,
    EligibiltycalculatorComponent,
    LoantrackerComponent,
    ApprovalComponent,
    DetailsComponent,
    PendingtableComponent,
    AboutusComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng5SliderModule,
    NgxSliderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
