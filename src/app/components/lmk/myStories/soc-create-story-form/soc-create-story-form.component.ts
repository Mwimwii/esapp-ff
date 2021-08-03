import { Component, OnInit, Input } from '@angular/core'
import { EsappRequestHandlerService } from '../../../../esapp-request-handler.service'

@Component({
  selector: 'app-soc-create-story-form',
  templateUrl: './soc-create-story-form.component.html',
  styleUrls: ['./soc-create-story-form.component.scss'],
})
export class SocCreateStoryFormComponent implements OnInit {
  @Input() route: string;
  tableData : any[];
  createTable = true
  current: number = 0
  checklist: boolean = false
  constructor(private http: EsappRequestHandlerService) {}
  ngOnInit() {}
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
}
