import { Component } from "@angular/core";

@Component({
    selector: 'body-component',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    constructor(){
        console.log('body working successfully')
    }
}