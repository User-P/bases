import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  borrado: string = '';

  deleteHeroe(): void {
    this.borrado = this.heroes.shift() || '';
  }
}
