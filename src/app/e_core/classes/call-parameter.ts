import { environment } from '../../../environments/environment'

export class CallParameter {

    method: string;
    CallData: object;
    // CallerName: String;
    // SecretKey: string;
    // WorkingSessionID: string;
    // TestCallFakeData: boolean;

    constructor(method: string, CallData?: any) {
        this.method = method;
        this.CallData = CallData;
    //     this.CallerName = environment.api.CallerName;
    //     this.SecretKey = environment.api.SecretKey;
    //     this.WorkingSessionID = environment.api.WorkingSessionID;
    //     if (sessionStorage.getItem("WorkSessionID") != null && sessionStorage.getItem("WorkSessionID").length > 0) {
    //         this.WorkingSessionID = sessionStorage.getItem("WorkSessionID");
    //     }
    //     this.TestCallFakeData = environment.api.TestCallFakeData;
    }

}

