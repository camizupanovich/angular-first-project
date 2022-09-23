import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//routes
import { APP_ROUTING } from './app.routes';
//services
import { ProductsService } from './services/products.service';
import { HomePageDataService } from './services/homepageData.service';
//components
import { AppComponent } from './app.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProductsService,
    HomePageDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
