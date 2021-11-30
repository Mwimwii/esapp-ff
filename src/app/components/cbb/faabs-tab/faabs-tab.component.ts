import { Component, Input, OnInit } from '@angular/core'
import { DataService } from '../../../services/data-service'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
// get the faabs object
// get the topics for the faabs
interface Faabs {
  id,
  name,
  code,
  status,
  latitude,
  longitude,
  created_at,
  updated_at,
  created_by,
  updated_by,
  max_farmer_graduation_training_topics
}

@Component({
  selector: 'app-faabs-tab',
  templateUrl: `faabs-tab.component.html`,
  styleUrls: ['faabs-tab.component.scss']
})
export class FaabsTabComponent implements OnInit {
  @Input() faabs_id ?: number;
  faabs: Faabs;

  constructor(private http: DataService) {
  }

  ngOnInit() {
    this.http.getFaabsGroups()
      .subscribe((data: []) => {
        this.faabs = this.arrayToObj(data, 'id')[this.faabs_id]
      });
  }

  arrayToObj(data, key) {
    return data.reduce((acc, curr) => (acc[curr[key]] = curr, acc), {})

  }
}
