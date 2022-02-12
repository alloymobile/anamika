import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { appIcon, IconService } from 'src/app/shared/services/icons/icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  providers: [IconService]
})
export class IconComponent implements OnInit {
  public _icon;

  @Input() spin: boolean;
  @Input() classes = '';
  @Input() size:SizeProp = 'sm';
  @Input() set icon(icon: appIcon) {
  	this._icon = this.iconService.getIcon(icon);
  }

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
  }
}
