import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Mi primer component funcionando';
  subtitle1 = 'clave declararlo en app.html la etiqueta';
  subtitle2 = ' y en el module superior que lo engloba añadir';
  subtitle3 = 'con un import el componete y llamarlo en declarations!';
}
