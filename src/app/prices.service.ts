import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PricesService {
  private dataUrl = 'http://esapp-test.herokuapp.com/prices' // URL to web api

  constructor(private http: HttpClient) {}

  // Get the json data and return
  getData(): Observable<any[]> {
    const data = this.http.get<any[]>(this.dataUrl)
    return data
  }
}
