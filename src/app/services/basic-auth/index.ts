import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.dev';
import store from 'store';

@Injectable()
export class basicAuthService {
    private environment = environment
    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<any> {
        const url = this.environment.apiUrl + '/auth-token';
        const auth = btoa(email + ':' + password);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + auth,
            }),
        };

        return this.http.get(url, httpOptions);
    }

    // user name password
    currentAccount(): Observable<any> {
        const url = this.environment.apiUrl + '/auth-token';
        // const accessToken = 'Basic ' + btoa(store.get('email') + ':' + store.get('password'))
        const accessToken = store.get('accessToken');
        const params = accessToken
            ? {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': accessToken,
                },
            }
            : {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic bluffToken',
                },
            };
        return this.http.get(url, params);
    }

    logout(): Observable<any> {
        const url = this.environment.apiUrl + '/auth-token/logout';
        return this.http.get(url);
    }
}
