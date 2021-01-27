import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; // todo modulo debe importar  el NgModule
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


// se define el decorador para que la clase herede las propiedades y metodos del NgModule, acontinuacion se mostraran algunas
@NgModule( { 

    //  Las declaraciones dicen que componentes tenemos en el modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    // Los exports indican que cosas queremos que sean publicas o visibles fuera de este modulos
    exports: [
        ListadoComponent
    ],

    //solo modulos  se colocan dentro de los imports
    imports: [
        CommonModule // Este modulo permite el uso de los ngFor y los ngIf entre otras propiedades de Angular
    ]
})

// exportando el mudolo para que puedo ser usado en otro documento, en este caso sera importado en app.module.ts

export class HeroesModule {}

