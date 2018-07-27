// Angular core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

// Covalent imports
import { CovalentLayoutModule, CovalentCommonModule } from '@covalent/core';

// Material imports
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSnackBarModule,
  MatProgressBarModule
} from '@angular/material';

// Application components and services
import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { AppRoutingModule } from './app-routing.module';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    CodeViewerComponent
  ],
  imports: [
    CdkTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    CovalentLayoutModule,
    CovalentCommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
