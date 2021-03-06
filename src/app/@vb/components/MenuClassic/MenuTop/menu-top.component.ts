import { Component, OnInit } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
import { filter } from 'rxjs/operators'
import { each, get, some, map } from 'lodash'
import { select, Store } from '@ngrx/store'
import { MenuService } from 'src/app/services/menu'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'vb-menu-classic-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss'],
})
export class MenuClassicTopComponent implements OnInit {
  logo: String
  menuColor: String
  menuData: any[]
  menuDataActivated: any[]
  role: String

  constructor(private menuService: MenuService, private store: Store<any>, private router: Router) {
    this.store.pipe(select(Reducers.getUser)).subscribe(state => {
      this.role = state.role
    })
    this.menuService.getMenuData().subscribe(menuData => (this.menuData = menuData))
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.logo = state.logo
      this.menuColor = state.menuColor
    })
  }

  ngOnInit() {
    this.activateMenu(this.router.url)
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.activateMenu(event.url ? event.url : null)
      })
  }

  activateMenu(url: any, menuData = this.menuData) {
    menuData = JSON.parse(JSON.stringify(menuData))
    const pathWithSelection = this.getPath({ url: url }, menuData, (entry: any) => entry, 'url')
    if (pathWithSelection) {
      pathWithSelection.pop().selected = true
      each(pathWithSelection, (parent: any) => (parent.open = true))
    }
    this.menuDataActivated = menuData.slice()
  }

  getPath(
    element: any,
    source: any,
    property: any,
    keyProperty = 'key',
    childrenProperty = 'children',
    path = [],
  ) {
    let found = false
    const getElementChildren = (value: any) => get(value, childrenProperty)
    const getElementKey = (value: any) => get(value, keyProperty)
    const key = getElementKey(element)
    return (
      some(source, (e: any) => {
        if (getElementKey(e) === key) {
          path.push(e)
          return true
        } else {
          return (found = this.getPath(
            element,
            getElementChildren(e),
            property,
            keyProperty,
            childrenProperty,
            path.concat(e),
          ))
        }
      }) &&
      (found || map(path, property))
    )
  }
}
