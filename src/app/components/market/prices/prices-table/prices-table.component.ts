import { Component, OnInit } from '@angular/core'
declare var require: any
import { PricesService } from '../../../../prices.service'

@Component({
  selector: 'app-prices-table',
  templateUrl: './prices-table.component.html',
  styleUrls: ['./prices-table.component.scss'],
})
export class PricesTableComponent implements OnInit {
  tableData: any
  createTable = true
  current: number = 0
  checklist: boolean = false
  constructor(private pricesService: PricesService) {}
  getPrices(): void {
    this.pricesService.getData().subscribe(data => (this.tableData = data))
  }
  ngOnInit() {
    this.getPrices()
  }

  pre(): void {
    this.current -= 1
    this.changeContent()
  }
  next(): void {
    this.current += 1
    this.changeContent()
  }
  done(): void {
    console.log('done')
  }
  changeContent(): void {
    this.createTable = false
    this.checklist = false
    switch (this.current) {
      case 0: {
        this.createTable = true
        break
      }
      case 1: {
        this.checklist = true
        // this.index = 'Second-content';
        break
      }
      case 2: {
        // this.index = 'third-content';
        break
      }
      default: {
        // this.index = 'error';
      }
    }
  }
  expandSet = new Set<number>()
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id)
    } else {
      this.expandSet.delete(id)
    }
  }
}
