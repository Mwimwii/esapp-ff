import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const data: any = require('./components/market/prices/prices-table/data.json')

@Injectable({
  providedIn: 'root',
})
export class PricesService {
  data = data
  private dataUrl = 'http://esapp-test.herokuapp.com/prices' // URL to web api

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    console.log('Fetching Data')
    const data = this.http.get<any[]>(this.dataUrl)
    console.log(data)
    return data
  }
}
