import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    {id:1, name: 'perseverance is key', description:'Endurance'},
    {id:2, name: 'slow steady and sure', description:'step by step'},
    {id:3, name: 'one foot infront of the other', description:'progressive'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
