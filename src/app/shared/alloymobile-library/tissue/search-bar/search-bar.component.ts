import { Component, OnInit } from '@angular/core';
import { appIcon } from 'src/app/shared/services/icons/icon.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
	public icon = appIcon;
  constructor() {
  }

  ngOnInit(): void {
  }

}
