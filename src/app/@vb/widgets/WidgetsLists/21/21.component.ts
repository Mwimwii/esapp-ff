import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-widgets-lists-21',
  templateUrl: './21.component.html',
})
export class VbList21Component implements OnInit {
  @Input() data : {
    title: string,
    url: string,
    icon: string
  }
  constructor() {}
  ngOnInit() {}
}
