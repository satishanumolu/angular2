import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FirstPageService } from '../services/first-page.service';
import { SecondPageService } from '../services/second-page.service';
import { ThirdPageService } from '../services/third-page.service';

import { AppComponent } from './app.component';
import { FirstPageComponent } from '../pages/first-page/first-page.component';
import { SecondPageComponent } from '../pages/second-page/second-page.component';
import { ThirdPageComponent } from '../pages/third-page/third-page.component';

@NgModule({
  declarations: [
      AppComponent,
      FirstPageComponent,
      SecondPageComponent,
      ThirdPageComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [
      FirstPageService,
      SecondPageService,
      ThirdPageService
  ],
  bootstrap: [
      AppComponent,
      FirstPageComponent,
      SecondPageComponent,
      ThirdPageComponent
  ]
})
export class AppModule { }
