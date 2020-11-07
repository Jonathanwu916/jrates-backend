import {Injectable, HttpService} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpRequestService {
    constructor(private readonly httpService: HttpService) {}

    get(url: string): Observable<any> {
        // TODO: Handle error
        return this.httpService.get(url).pipe(map(response => response.data));
    }
}
