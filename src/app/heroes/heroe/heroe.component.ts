
import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 45

    //  a continuacion un getter
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        // return this.nombre + ' - ' + this.edad; la  linea de abajo seria lo mismo que esto
        return `${ this.nombre} - ${ this.edad }`; 
    }

//  Los siguientes metodos cambian el valor del nombre, el one way data o enlazado de una sola via solo permite hacer estos cambios del componente pero no desde el template al componente, se recomienda que sea asi tambien existe el two way data binding

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}