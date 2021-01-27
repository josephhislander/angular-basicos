//  importando el decorador
import { Component } from '@angular/core';

//  este decorador nos permite herdar las propiedades y metodos que nos proporciona angular para crear los componentes
@Component ({

    // nombre del componente
    selector: 'app-contador',    

    // El html de nuestro componente
    template: `                      
    
        <h1> {{ titulo }} </h1>

        <h3> La base es: <strong> {{ base }} </strong> </h3>

        <button (click) = ' acumular( + base ) ' > + {{base}} <base href="">  </button>

        <span> {{ numero }} </span>

        <button (click) = ' acumular( - base ) ' > - {{base}} <base href=""> </button>  

    `
})


// a continuacion el componente que estamos creando, todo se hace a traves de clases 

export class ContadorComponent{

    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
  
    acumular ( valor: number ) {
      this.numero += valor
    }

}

//  luego debemos de agregar nuestro componente al archivo app.modulo.ts 