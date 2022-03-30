import { Component, OnInit} from '@angular/core';

import { Farmer } from 'src/app/components/models/farmer.interface';
import { User } from 'src/app/components/models/user.interface';
import { DataService } from 'src/app/services/data-service';



@Component({
    selector: 'app-dashboard-head',
    templateUrl: './dashboard-head.component.html',
    styleUrls: ['./dashboard-head.component.scss'],
})
export class DashboardHeadComponent implements OnInit {
    user: User = {
        id: 1,
        campID: 7,
        name: 'James Bond',
        email: '007@mi6.gov.uk',
        role: 'fieldOfficer',
        status: 0
    }
    farmerCount: number | 0;

    constructor(private http: DataService) {}
    ngOnInit() {
        this.http.getCategoryAFarmers().subscribe((data: Farmer[]) => {
            this.farmerCount = data.filter(farmer => farmer.created_by === this.user.id ).length;
            console.log(this.farmerCount);
        });
    }
}
