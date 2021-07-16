import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-prices-view-price',
  templateUrl: './prices-view-price.component.html',
  styleUrls: ['./prices-view-price.component.scss'],
})
export class ViewPriceComponent implements OnInit {
  @Input('data') data: any = {}

  constructor() {}

  ngOnInit(): void {}
}
