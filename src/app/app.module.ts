import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssetsComponent } from './asset/assets.component';
import { AssetsService } from './asset/assets.service';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    AssetsService
  ],
  bootstrap: [AppComponent, AssetsComponent],
})
export class AppModule {

}
