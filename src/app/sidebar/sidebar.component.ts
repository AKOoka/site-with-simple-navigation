import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements AfterContentInit {
  private _sidebarHtml: HTMLElement | undefined
  private _isHidden: boolean
  private _isFixed: boolean
  private _isOpen: boolean

  get isHidden (): boolean {
    return this._isHidden
  }

  get isFixed (): boolean {
    return this._isFixed
  }

  @ViewChild('#sidebar') private readonly _sidebarRef: ElementRef

  constructor (htmlSidebarRef: ElementRef) {
    this._isHidden = false
    this._isFixed = false
    this._isOpen = false
    this._sidebarRef = htmlSidebarRef
  }

  private _checkIfHidden (): void {
    if (!this._isOpen && window.innerWidth < 1280) {
      this._isHidden = true
    }
  }

  private _checkIfFixed (): void {
    if (this._sidebarHtml === undefined) {
      return
    }

    if (window.innerWidth > 1280 && window.scrollY > this._sidebarHtml.scrollHeight - window.innerHeight) {
      this._isFixed = true
    } else {
      this._isFixed = false
    }
  }

  ngAfterContentInit (): void {
    this._sidebarHtml = this._sidebarRef.nativeElement.querySelector('.sidebar')

    if (window.innerWidth < 1280) {
      this._isHidden = true
    }

    window.onresize = () => {
      this._checkIfHidden()
      this._checkIfFixed()
    }

    window.onscroll = this._checkIfFixed.bind(this)
  }

  toggleSidebar (): void {
    this._isOpen = !this._isOpen
    this._isHidden = !this._isHidden
  }
}
