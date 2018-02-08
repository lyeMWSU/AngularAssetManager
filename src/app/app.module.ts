import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssetComponent } from './asset/asset.component';
import {AssetsComponent} from './assets.component';
import {AssetsService} from './assets.service';
import {FormsModule} from '@angular/forms';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
    AssetsComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AssetsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
