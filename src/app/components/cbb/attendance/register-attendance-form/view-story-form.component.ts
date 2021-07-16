import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-register-attendants-form',
  templateUrl: './view-story-form.component.html',
  styleUrls: ['./view-story-form.component.scss'],
})
export class RegisterAttendantsFormComponent implements OnInit {
  loading = false
  constructor() {}

  ngOnInit(): void {}
  data = []
  dataSet = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]
  change(): void {
    this.loading = true
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = []
        this.loading = false
      }, 1000)
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: 'Ant Design Title 1',
          },
          {
            title: 'Ant Design Title 2',
          },
          {
            title: 'Ant Design Title 3',
          },
          {
            title: 'Ant Design Title 4',
          },
        ]
        this.loading = false
      }, 1000)
    }
  }
}
