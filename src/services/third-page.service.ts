import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ThirdPageService {
    private url = 'http://localhost:4200/api';
    private dummyData = [
        {
            id: 1,
            value: 24,
            name: 'Satish'
        },
        {
            id: 1,
            value: 30,
            name: 'Naresh'
        },
        {
            id: 1,
            value: 50,
            name: 'Abhi'
        }
    ];

    constructor (private http: Http) {}

    getContent() : Observable<Response> {

        return this.http.get(this.url)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(this.dummyData));
    }

    submit(input: any) : Observable<Response> {

        return this.http.post(this.url, input)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw({ message: 'An unexpected server error occurred' }));
    }

}