import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { appIcon, getFontawasomeIcon, getSizeProp } from "src/app/shared/services/icons/icon.service";

export class Pill{
    id: number;
    title: string;
    icon: any;
    link: string;
    size: SizeProp;
    constructor(response?: any){
        if(response){
            this.id = response.id ? response.id : 0;
            this.icon = response.icon ? getFontawasomeIcon(response.icon) : getFontawasomeIcon("appIcon");
            this.title = response.title ? response.title : "";
            this.link = response.link ? response.link : "./";
            this.size = response.size ? getSizeProp(response.size) : getSizeProp("lg");
        }else{
            this.id = 0;
            this.icon = getFontawasomeIcon("appIcon");
            this.title = "";
            this.link = "./"
            this.size = getSizeProp("lg");;
        }
    }

    // createFontawasomIcon(icon: string){
    //     switch (icon){
    //         case "faTachometerAlt":
    //             return faTachometerAlt;
    //         break;
    //         case "faUser":
    //             return faUser;
    //         break;
    //         case "faUsers":
    //             return faUsers;
    //         break;
    //         case "faCogs":
    //             return faCogs;
    //         break;
    //         case "faEnvelopeOpenText":
    //             return faEnvelopeOpenText;
    //         break;
    //         case "faHandHoldingUsd":
    //             return faHandHoldingUsd;
    //         break;
    //         case "faStore":
    //             return faStore;
    //         break;
    //         case "faReceipt":
    //             return faReceipt;
    //         break;
    //         case "faEdit":
    //             return faEdit;
    //         break;
    //         case "faCalendarCheck":
    //             return faCalendarCheck;
    //         break;
    //         case "faUserCog":
    //             return faUserCog;
    //         case "faTools":
    //             return faTools;
    //     }
    // }
}
