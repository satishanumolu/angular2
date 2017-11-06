import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SecondPageService {
    private url = 'http://localhost:4200/api';

    constructor (private http: Http) {}

    submitInput(input: any) : Observable<Response> {

        return this.http.post(this.url, input)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw({ message: 'An unexpected server error occurred' }));
    }

}