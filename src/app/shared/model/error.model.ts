export class ErrorMsg{
    timestamp: string;
    status: number;
    error: string;
    exception: string;
    message: string;
    path: string;
    static create(response: any): ErrorMsg {
        return new ErrorMsg(response);
    }

    constructor(response?: any){
        if(response){
            if(response.error){
                this.timestamp = response.error.timestamp ? response.error.timestamp : "";
                this.status = response.error.status ? response.error.status : 0;
                this.error = response.error.error ? response.error.error : "";
                this.exception = response.error.exception ? response.error.exception : "";
                this.message = response.error.message ? response.error.message : "";
                this.path = response.error.path ? response.error.path : "";
                if(this.status == 401){
                    this.message = "Wrong username or password"
                }
            }else{
                this.timestamp = response.timestamp ? response.timestamp : "";
                this.status = response.status ? response.status : 0;
                this.error = response.error ? response.error : "";
                this.exception = response.exception ? response.exception : "";
                this.message = response.message ? response.message : "";
                this.path = response.path ? response.path : "";
            }
        }else{
            this.timestamp =  "";
            this.status = 0;
            this.error = "";
            this.exception = "";
            this.message =  "";
            this.path = "";
        }
    }
}
