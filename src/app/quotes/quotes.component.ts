import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes(1,'perseverance is key','Endurance'),
    new Quotes(2,'slow steady and sure','step by step'),
    new Quotes(3,'one foot infront of the other','progressive')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
