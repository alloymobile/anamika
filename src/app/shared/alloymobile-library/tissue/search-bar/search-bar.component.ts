import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { appIcon } from 'src/app/shared/services/icons/icon.service';
import { SearchBar } from './search-bar.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
	icon = appIcon;
  _searchBar: SearchBar = new SearchBar();
  @Output() output: EventEmitter<SearchBar> = new EventEmitter<SearchBar>();
  constructor() {
  }

  ngOnInit(): void {
  }

  onAddClicked(){
    this._searchBar.add = true;
    this.output.emit(this._searchBar);
  }

}
