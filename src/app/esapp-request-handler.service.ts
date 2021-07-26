import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../environments/environment.dev'
import { EnumsService } from './services/enums/enums.service'

@Injectable({
  providedIn: 'root',
})

export class EsappRequestHandlerService {
  private environment = environment;
  private auth: string;
  constructor(private http: HttpClient, private standards: EnumsService) {
    this.auth = btoa(this.standards.standards.testUserName + ':' + this.standards.standards.testUserPassword)
  }


  // Get the json data and return
  getDataUnauthenticated(slug: string): Observable<any[]> {
    const url = this.environment.apiUrl + slug
    const data = this.http.get<any[]>(url)
    return data
  }

  //create a post request that takes one parameter
  postDataUnAuthenticated(slug: string, data: object): Observable<any> {
    const url = this.environment.apiUrl + slug
    const body = JSON.stringify(data)
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = { headers }
    return this.http.post(url, body)
  }

  // Get the json data and return
  getDataAuthenticated(slug: string): Observable<any[]> {
    const url = this.environment.apiUrl + slug

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + this.auth
      })
    };
    const data = this.http.get<any[]>(url, httpOptions)
  return data
}

//create a post request that takes one parameter
postDataAuthenticated(slug: string, data: object): Observable<any> {
  const url = this.environment.apiUrl + slug
  const body = JSON.stringify(data)
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + this.auth
    })
  };
  return this.http.post(url, body, httpOptions)
  }

}
