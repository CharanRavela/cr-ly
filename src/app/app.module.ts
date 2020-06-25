import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { UrlGeneratorComponent } from './url-generator/url-generator.component';
import { GeneratedURLSComponent } from './generated-urls/generated-urls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    UrlGeneratorComponent,
    GeneratedURLSComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatCardModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
