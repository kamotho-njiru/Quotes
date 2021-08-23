import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[]=[
    {id:1, name: 'perseverance is key'},
    {id:2, name: 'slow steady and sure'},
    {id:3, name: 'one foot infront of the other'}
  ];
}
    
  



