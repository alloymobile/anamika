export class Drawing{
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  client: string;
  action: DrawingAction;
  error: string;
  search: string;
  constructor(response?: any){
    if(response){
      this.id = response.id ? response.id : "";
      this.name = response.name ? response.name : "";
      this.imageUrl = response.imageUrl ? response.imageUrl : "";
      this.description= response.description ? response.description : "";
      this.client = response.client ? response.client : "";
      this.action = response.action ? Drawing.getDrawingAction(response.action) : DrawingAction.ADD;
      this.error = response.error ? response.error : "";
      this.search = response.search ? response.search : "";
    }else{
      this.id = "";
      this.name = "";
      this.imageUrl = "";
      this.description = "";
      this.client = "";
      this.action = DrawingAction.ADD;
      this.error = "";
      this.search = "";
    }
  }

  static getDrawingAction(action: string){
    switch (action){
      case "add":
        return DrawingAction.ADD;
      case "edit":
        return DrawingAction.EDIT;
      case "delete":
        return DrawingAction.DELETE;
      default:
        return DrawingAction.ADD;
    }
  }

  static getDrawingDTO(drawing: Drawing){
    return {
      id : drawing.id,
      name : drawing.name,
      imageUrl : drawing.imageUrl,
      description : drawing.description,
      client : drawing.client
    }
  }
}

export enum DrawingAction{
  ADD,
  EDIT,
  DELETE
}
