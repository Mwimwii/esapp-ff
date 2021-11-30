import { Component, OnInit,AfterViewInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit{
  data: any[]
  private map;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.getdata()
  }

  // Place the map inside the DOM
  ngAfterViewInit(): void {
  this.initMap();
  }

  // Create the new Leaflet map object
  initMap() {
    this.map = L.map('map', {
      'center': [-15.3526808,29.1675323],
      'zoom': 8
    });


    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

  tiles.addTo(this.map);

  }

  // placeholder for the data that we will feed into the map
  // getdata() {
  //   this.http.get('/')
  //     .subscribe(data => this.data = data)
  //
  // }

}
