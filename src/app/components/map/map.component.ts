import { Component, OnInit,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

import { DataService } from 'src/app/services/data-service';

import { Farmer } from 'src/app/components/models/farmer.interface';


@Component({
    selector: 'app-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit{
    data: any[]
    farmers: Farmer[]
    private map;
    constructor(private http: HttpClient, private dataService: DataService) {
    }

    ngOnInit(): void {
    // this.getdata()
    }

    // Place the map inside the DOM
    ngAfterViewInit(): void {
        this.initMap();
        this.makeFarmerMarkers(this.map);
    }

    // Created the markers for the farmers
    makeFarmerMarkers(map: L.map) {
        this.dataService.getCategoryAFarmers().subscribe((data: Farmer[]) => {
            this.farmers = data;
            for(const farmer of this.farmers) {
                const marker = L.marker([farmer.latitude, farmer.longitude]).addTo(map);
                marker.bindPopup(`<b>${farmer.first_name}</b>`);
            }
        });
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
