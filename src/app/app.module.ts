import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select'; 
import {ReactiveFormsModule} from '@angular/forms';
import { MainWebsiteBodyComponent } from './main-website-body/main-website-body.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { TableListComponent } from './table-list/table-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ArticlesSectionComponent } from './articles-section/articles-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWebsiteBodyComponent,
    SignUpFormComponent,
    ButtonBarComponent,
    TableListComponent,
    HeaderSectionComponent,
    ArticlesSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
