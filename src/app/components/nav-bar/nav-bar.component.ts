import { Component } from "@angular/core";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBar{
    constructor(){
        console.log('navigation bar is working successfully')
    }
}