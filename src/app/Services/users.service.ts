import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService{
public url = 'http://localhost/inteligcomercial/web/app_dev.php';

constructor(private _http: Http){}

readerjson(){
    return this._http.get(this.url) .map(res => res.json());
    }
}