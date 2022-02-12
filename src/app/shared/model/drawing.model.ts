export class Drawing{
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  client: string;
  constructor(response?: any){
    if(response){
      this.id = response.id ? response.id : "";
      this.name = response.name ? response.name : "";
      this.imageUrl = response.imageUrl ? response.imageUrl : "";
      this.description= response.description ? response.description : "";
      this.client = response.client ? response.client : "";
    }else{
      this.id = "";
      this.name = "";
      this.imageUrl = "";
      this.description = "";
      this.client = "";
    }
  }
}
