export class SearchBar{
  search: string;
  add: boolean;
  constructor(response?: SearchBar){
    if(response){
      this.search = response.search ? response.search : "";
      this.add = response.add ? response.add : false;
    }else{
      this.search = "";
      this.add = false;
    }
  }
}
