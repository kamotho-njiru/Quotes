import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes(1,'perseverance is key','Endurance',new Date(2021,8,28)),
    new Quotes(2,'slow steady and sure','step by step', new Date(2021,8,28)),
    new Quotes(3,'one foot infront of the other','progressive', new Date(2021,8,28))
  ];
  deleteQuote(iscomplete, index){
    if (iscomplete){
      let toDelete =confirm('Are you sure you want to delete ${this.quotes[index].name}?')

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(iscomplete, index){
    if (iscomplete) {
      this.quotes.splice(index,1)
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
