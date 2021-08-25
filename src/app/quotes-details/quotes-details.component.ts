import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote: Quotes = {id: 0, name: '', description: '', showDescription: false , completeDate: new Date}
  @Output() iscomplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.iscomplete.emit(complete)
  }
  quoteComplete(complete:boolean){
    this.iscomplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
