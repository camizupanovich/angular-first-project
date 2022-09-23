import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//routes
import { APP_ROUTING } from './app.routes';
//services
import { ProductsService } from './services/products.service';
//components
import { AppComponent } from './app.component';
import { NgFor } from './components/ngfor/ngfor.component';
import { Hero } from './components/hero/hero.component';
import { NavBar } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    Hero,
    NgFor
    
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
