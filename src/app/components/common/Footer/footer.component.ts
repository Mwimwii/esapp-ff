import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
// import { ConfigError } from 'protractor/built/exitCodes'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  settings: any
  date = new Date().getFullYear()
  essap_link = ''
  public Standards: any = Standards
  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.settings = state
    })
    this.essap_link = Standards.essap_link
  }
}
