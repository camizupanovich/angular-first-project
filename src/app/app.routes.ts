import { RouterModule, Routes } from "@angular/router";
import { NgFor } from "./components/ngfor/ngfor.component";
import { Hero } from "./components/hero/hero.component";
import { NgIf } from "./components/ngif/ngif.component";
const APP_ROUTES: Routes = [
    { path: 'ngfor', component: NgFor},
    { path: 'ngif', component: NgIf},
    {path:'static', component: Hero},
    {path: '**', pathMatch: 'full', redirectTo:'static'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)