import { Injectable } from "@angular/core";
@Injectable()
export class HomePageDataService{
    private homepageData:HomePageData[] = [
        {title:"¿Qué es Angular?",description:"Tomado de los documentos de Angular, Angular es un marco y una plataforma para crear aplicaciones de una sola página. Es uno de los tres grandes marcos frontend junto con React y Vue. Angular consta de algunos conceptos básicos: módulos, componentes y servicios. Cada uno de estos conceptos básicos tiene algunos conceptos propios. Los módulos tienen módulos raíz y módulos de funciones. Los componentes tienen componentes raíz, plantillas, vistas, enlace de datos, directivas y canalizaciones. Los servicios tienen proveedores y usan inyección de dependencia. Esto puede parecer mucho porque lo es. Angular tiene la reputación de ser un marco front-end robusto, pero si puede comprender los módulos, componentes y servicios de Angular, entonces está en camino de dominar Angular."},
        {title:"Módulos",description:"Angular tiene algunos módulos prediseñados para ayudar a los desarrolladores, Angular los llama NgModules. Los NgModules siempre están marcados con la anotación @NgModule en Angular. Algunos módulos comunes son FormsModule, RouterModule, HttpClientModule y el módulo de diseño de material angular. La idea de módulos proviene del principio de responsabilidad única. Si bien un módulo puede hacer muchas cosas, en un nivel superior se centra en una cosa, como formularios o enrutamiento. Esto evita la hinchazón de la aplicación y ordena la aplicación en bloques concisos de funcionalidad. La organización del código en módulos también permite la carga diferida, lo que significa que los módulos se cargan según sea necesario en lugar de todos a la vez al inicializar la aplicación. La carga diferida puede ayudar a mejorar los tiempos de carga y la velocidad de su aplicación, una métrica crucial."},
        {title:"Módulo raíz",description:"Cada aplicación Angular tendrá un módulo raíz, llamado AppModule, que vive en un archivo app.module.ts por defecto. Este módulo raíz permite que la aplicación se inicie o se inicialice y cargue por sí misma. A continuación se muestra un ejemplo de un AppModule predeterminado."},
        {title:"Caracteristicas Modulo Raíz",description:"Un módulo angular tiene cinco propiedades que componen sus metadatos, estas propiedades son:Declaraciones: Aquí podemos enumerar cualquier directiva, componente o canalización que necesitará comunicarse entre sí.Importaciones: extrae cualquier módulo como los formularios o los módulos de enrutador.Exportaciones: hace que los componentes, las tuberías y las directivas se puedan utilizar en otros módulos que importan este.Proveedores: los servicios agregados aquí se conocen a nivel mundial para permitir la inyección de dependencia.Bootstrap: solo el módulo raíz tiene esta propiedad. Este contendrá la vista principal de la aplicación, también llamada componente raíz."},
        {title:"Componentes",description:"Un componente angular es una clase de TypeScript en su forma más pura, pero hay una regla, debe tener un decorador @Component. La principal responsabilidad de la etiqueta @Component es conectar la plantilla a un componente, sin estos metadatos, Angular no tendría idea de qué hacer con su componente. Hay tres campos importantes dentro de la etiqueta de metadatos: Selector, Template y Providers"}
    ]
    constructor(){
        console.log("Service works")
    }
    getHomePageData():HomePageData[]{
        return this.homepageData
    }
}
export interface HomePageData{
    title: string;
    description:string;
}