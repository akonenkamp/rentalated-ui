import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ApartmentListingsComponent } from './apartment-listings/apartment-listings.component';
import { ApartmentDataService } from './apartment-data/apartment-data.service';
import { AparmentDetailComponent } from './aparment-detail/aparment-detail.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Route} from '@angular/router/';
import { FormsModule } from '@angular/forms';
import { SessionDataService } from "./session-data/session-data.service";

const routes: Route[] = [

  {path: 'login', component: LoginComponent },
  {path: '', component: ApartmentListingsComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ApartmentListingsComponent,
    AparmentDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApartmentDataService, SessionDataService],
  bootstrap: [AppComponent]

})
export class AppModule { }
