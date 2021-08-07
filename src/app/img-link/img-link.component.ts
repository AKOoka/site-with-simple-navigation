import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-img-link',
  templateUrl: './img-link.component.html',
  styleUrls: ['./img-link.component.scss']
})
export class ImgLinkComponent {
  private _linkRef: string
  private _imgName: string

  @Input()
  get linkRef (): string {
    return this._linkRef
  }

  set linkRef (ref: string) {
    this._linkRef = ref
  }

  @Input()
  get imgName (): string {
    return this._imgName
  }

  set imgName (name: string) {
    this._imgName = name
  }

  constructor () {
    this._linkRef = ''
    this._imgName = ''
  }
}
