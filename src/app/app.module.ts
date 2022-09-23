import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//routes
import { APP_ROUTING } from './app.routes';
//services
import { ProductsService } from './services/products.service';
//components
import { AppComponent } from './app.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    HomeComponent,
    ProductsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
