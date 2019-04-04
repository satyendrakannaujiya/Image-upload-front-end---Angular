import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import  { ResponseComponent } from './response/response.component';
import { HomeComponent } from './home/home.component';
// import { HomeComponent } from './response/response.component';
const appRoutes: Routes = [
  { path: 'response', component: ResponseComponent },
  {path : "home" , component: HomeComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     AngularFileUploaderModule,
     FormsModule,
      RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
