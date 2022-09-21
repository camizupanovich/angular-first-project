import { Component } from "@angular/core";

@Component({
    selector: 'ngfor-component',
    templateUrl: './ngfor.component.html'
})
export class NgFor{
    constructor(){
        console.log('ngfor working successfully')
    }
}