import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table'; 
import { MainWebsiteBodyComponent } from './main-website-body/main-website-body.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { TableListComponent } from './table-list/table-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainWebsiteBodyComponent,
    SignUpFormComponent,
    ButtonBarComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
