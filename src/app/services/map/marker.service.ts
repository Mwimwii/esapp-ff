import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { DataService } from '../data-service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: DataService) {
  }

  makeFarmerMarkers(map: L.map): void {
    this.http.getAllFarmers().subscribe((res: any) => {
      for (const farmer of res.farmers) {
        const lon = farmer.longitude;
        const lat = farmer.latitude;
        const marker = L.marker([lat, lon]);
        marker.addTo(map);
      }
    });
  }
}
