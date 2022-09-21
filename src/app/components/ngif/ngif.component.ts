import { Component } from "@angular/core";

@Component({
    selector: 'ngif-component',
    templateUrl: './ngif.component.html'
})
export class NgIf{
    constructor(){
        console.log('ngif working successfully')
    }
}