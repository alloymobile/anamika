import { appIcon, getFontawasomeIcon } from "src/app/shared/services/icons/icon.service";

export class IconBar{
  tooltip: string;
  icon: appIcon;
  constructor(res?: IconBar){
    if(res){
      this.tooltip = res.tooltip ? res.tooltip : "";
      this.icon = res.icon ? getFontawasomeIcon(res.icon) : getFontawasomeIcon("appIcon");
    }else{
      this.tooltip = "";
      this.icon = getFontawasomeIcon("appIcon");
    }
  }
}
