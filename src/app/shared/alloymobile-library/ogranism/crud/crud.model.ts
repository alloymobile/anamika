import { SearchBar } from "../../tissue/search-bar/search-bar.model";

export class Crud{
  search: SearchBar;
  constructor(response?: Crud){
    if(response){
      this.search = response.search ? new SearchBar(response.search) : new SearchBar();
    }else{
      this.search = new SearchBar();
    }
  }
}
