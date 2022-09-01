import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  @Output() search = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.search.emit(this.searchValue);
  }
}
