import { Component, OnInit,AfterViewInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as L from 'leaflet';
import { MarkerService } from 'src/app/services/map/marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit{
  data: any[]
  private map;

  constructor(private http: HttpClient, private marker: MarkerService) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  this.initMap();
  this.marker.makeFarmerMarkers(this.map)
  }

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
