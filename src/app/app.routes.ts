import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
const APP_ROUTES: Routes = [
    { path: 'products', component: ProductsComponent},
    { path: 'about', component: AboutComponent},
    {path:'home', component: HomeComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'},
    {path: '', pathMatch: 'full', redirectTo:'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)