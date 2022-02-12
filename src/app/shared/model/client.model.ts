
export class Client{
  id: string;
  name: string;
  email: string;
  phone: string;
  token: string;
  roles: Role[];
  addresses: Address[];

  constructor(response?: any){
      if(response){
          this.id = response.id ? response.id : "";
          this.name = response.name ?  response.name : "";
          this.email = response.email ? response.email : "";
          this.token = response.token ? response.token : "";
          this.roles = response.roles ? response.roles : [];
          this.addresses = response.addresses ? response.addresses : [];
      }else{
          this.id = "";
          this.name = "";
          this.email = "";
          this.token = "";
          this.roles = [];
          this.addresses = [];
      }
  }
}

export class Role{
  id: number;
  name: string;
  selected: boolean;
  constructor(response?: any){
      if(response){
          this.id = response.id ? response.id : 0 ;
          this.name = response.name ? response.name : "" ;
          this.selected = response.selected ? response.selected : false;
      }else{
          this.id = 0;
          this.name = "";
          this.selected = false;
      }
  }
}

export class Address{
  id: string;
  addressType: AddressType;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  location: Location;
  constructor(response?: any){
      if(response){
          this.id = response.id ? response.id : "";
          this.addressType = response.addressType ? response.addressType : AddressType.STORE;
          this.address= response.address ? response.address : "";
          this.city= response.city ? response.city : "";
          this.state= response.state ? response.state : "";
          this.postalCode= response.postalCode ? response.postalCode : "";
          this.country= response.country ? response.country : "";
          this.location = response.location ? new Location(response.location) : new Location();
      }else{
        this.id = "";
        this.addressType = AddressType.STORE;
        this.address = "";
        this.city = "";
        this.state = "";
        this.postalCode = "";
        this.country = "";
        this.location = new Location();
      }
  }
}

export enum AddressType{
  HOME,SHIPPING,BILLING,OFFICE,STORE
}

export class Location{
  type: string;
  coordinates: number[];
  constructor(response?: any){
    if(response){
        this.type = response.type ? response.type : "" ;
        this.coordinates = response.coordinates ? response.coordinates : [];
    }else{
      this.type = "" ;
      this.coordinates = [];
    }
  }
}
