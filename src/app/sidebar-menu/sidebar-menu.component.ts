import { Component } from '@angular/core'

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})

export class SidebarMenuComponent {
  private _showSubMenu: boolean

  constructor () {
    this._showSubMenu = false
  }

  get showSubMenu (): boolean {
    return this._showSubMenu
  }

  toggleSubMenu (): void {
    this._showSubMenu = !this._showSubMenu
  }
}
