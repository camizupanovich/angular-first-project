# Angular

`comandos rapidos`<br/>
* crear componente con CLI <br/>
ng g c components/nav-bar --spec=false -is
<br/>
ng => angular<br/>
g => generate<br/>
c => component<br/>
--spec=false => para que no cree el archivo de testing <br/>
-is => para que no cree el css<br/>
<hr/>

## Organizacion
* dentro de la carpeta `src/app` tendremos el componente `<app-root></app-root>` el componente padre donde tendremos :<br/>
app.component.html<br/>
app.component.ts<br/>
app.component.css<br/>
app.component.spec<br/>
<br/> 
que serían los generados a través de CLI <br/>
pero tambien tendremos `app.module.ts` <br/>
se crea una carpeta donde pondremos todos nuestros componentes y para una mejor organizacion una carpeta por cada uno.

<hr/>

### Como se declaran para que sean visibles en toda la app
en `app.module.ts` se importan componentes
<br/>
import { AppComponent } from './app.component';<br/>
import { BodyComponent } from './components/body/body.component';<br/>
import { Hero } from './components/hero/hero.component';<br/>
import { NavBar } from './components/nav-bar/nav-bar.component';<br/>

@NgModule({<br/>
  declarations: [<br/>
    AppComponent,<br/>
    NavBar,<br/>
    Hero,<br/>
    BodyComponent<br/>
  ],<br/>
  imports: [<br/>
    BrowserModule<br/>
  ],<br/>
  providers: [],<br/>
  bootstrap: [AppComponent]<br/>
})<br/>
<hr/>

### Estructura básica de component.ts
import { Component } from "@angular/core" <br/>

@component ({<br/>
  selector: "body-component",<br/>
  templateUrl: "/body.component.html",<br/>
  styleUrl: "/body.component.css"<br/>
})<br/>
* `selector` será la etiqueta HTML con la que será representado.
* `template` será el html que tendrá declarado en el mismo archivo. `templateUrl` será la ruta al archivo html 
* `styleUrl` en caso de dar estilos personalizados se pueden trabajar en un archivo separado, parecido a css.module

export class BodyComponent{......}<br/>
* luego se declara el componente, el script, donde podremos usar @Input y @output.
## ¿Qué es input y output en Angular?
Los decoradores @Input y @Output sirven para intercambiar datos entre componentes, son un mecanismo para enviar y recibir datos de un componente a otro. @Input se usa para recibir datos en un componente mientras que @Output se usa para enviar datos fuera de un componente.


## Rutas

## Como se pasa codigo js al html?
* para pasar props a html <> {{ elemento.nombre }} </> <br/>
* cuando le pasamos props a atributos ej <img [src]="elemento.image" /> no olvidarse porque no tomará el codigo javascript<br/>
* para pasar event listeners (click)="share()" <br/>



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
