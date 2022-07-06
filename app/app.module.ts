import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { Example1Component } from './example1/example1.component';
import { MyProjectComponent } from './MyProject';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import {BootDemoComponent} from './BootStrapDemo';
import { Example2Component } from './example2/example2.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';


const appRoutes : Routes =[
{path:'Registration',component:RegistrationComponent},
{path:'Contact',component:ContactComponent},
{path:'Feedback',component:FeedbackComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ContactComponent,
    Example1Component,
    MyProjectComponent,
    FeedbackComponent,
    BootDemoComponent,
    Example2Component,
    IfdemoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [IfdemoComponent]
})
export class AppModule { }