# Angular

`comandos rapidos`<br/>
* crear componente con CLI <br/>
ng g c components/nav-bar --spec=false -is
ng => angular<br/>
g => generate<br/>
c => component<br/>
--spec=false => para que no cree el archivo de testing <br/>
-is => para que no cree el css<br/>

## ¿Qué es input y output en Angular?
Los decoradores @Input y @Output sirven para intercambiar datos entre componentes, son un mecanismo para enviar y recibir datos de un componente a otro. @Input se usa para recibir datos en un componente mientras que @Output se usa para enviar datos fuera de un componente.


## Rutas

## Como se incluyen en la app
en `app.module.ts` se importan componentes y se crean las rutas
@NgModule({<br/>
  imports: [<br/>
    BrowserModule,<br/>
    ReactiveFormsModule,<br/>
    RouterModule.forRoot([<br/>
      { path: '', component: ProductListComponent },<br/>
      { path: 'products/:productId', component: ProductDetailsComponent },<br/>
    ])<br/>
  ],<br/>
  declarations: [<br/>
    AppComponent,<br/>
    TopBarComponent,<br/>
    ProductListComponent,<br/>
    ProductAlertsComponent,<br/>
    ProductDetailsComponent,<br/>
  ],

## Organización de componentes
body.component.html<br/>
body.component.ts<br/>
body.components.css (en caso de estilos personalizados)<br/>

## Como se pasa codigo js al html?
* para pasar props a html <> {{ elemento.nombre }} </> <br/>
* cuando le pasamos props a atributos ej <img [src]="elemento.image" /> no olvidarse porque no tomará el codigo javascript<br/>
* para pasar event listeners (click)="share()" <br/>

`EJEMPLO DE CODIGO`

import { Component } from "@angular/core"

@component ({<br/>
  selector: "body-component",<br/>
  templateUrl: "/body.component.html",<br/>
  styleUrl: "/body.component.css"<br/>
})<br/>

export class BodyComponent{......}


### Enlaces de referencia

* comandos para angular https://codigoencasa.com/los-comandos-de-angular-mas-usados/
* directivas https://javadesde0.com/introduccion-a-las-directivas-y-tipos-de-directivas-en-angular/#:~:text=%C2%BFQu%C3%A9%20son%20las%20directivas%20de,funcionalidad%20a%20las%20etiquetas%20HTML.


### Conceptos de las directivas

`ngIf como HOOKS para renderizados condicionales, modales, dark mode etc etc`

* `*ngIf o [ngIf]`: permite evaluar de forma condicional una condición y dependiendo del resultado normalmente se suele utilizar con la finalidad de mostrar u ocultar una información.
* `*ngFor o [ngFor]`: permite iterar una array, objeto, etc. normalmente con el fin de insertar cada uno de los elementos contenidos en su interior.
* *ngSwith o [*ngSwith] + *ngSwitchCase o [ngSwitchCase]: permite evaluar una expresión mediante a una sucesión de condiciones principalmente se utiliza cunado existen casuísticas múltiples y solo queremos ejecutar una en especifico o todas a partir de dicha condición.
* [ngStyle]: nos permitirán cambiar las propiedades del elemento HTML seleccionado.
* [ngClass]: nos permitirán agregar clases dinámicamente sobre el elemento HTML seleccionado
