import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
    
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  borrado: string = '' ;

 borrarHeroe(){
   
//  Traducir los erroes es importante
    const heroeBorrado = this.heroes.pop() || '';
    this.borrado = heroeBorrado;
  }

  

}
