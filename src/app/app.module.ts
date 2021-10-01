import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainWebsiteBodyComponent } from './main-website-body/main-website-body.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { TableListComponent } from './table-list/table-list.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
