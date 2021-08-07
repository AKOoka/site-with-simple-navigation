import { Component } from '@angular/core'

interface IPostContent {
  linkRef: string
  imgName: string
  text: string
}

const postsContent: IPostContent[] = [
  {
    linkRef: '/home',
    imgName: 'bear.jpg',
    text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.'
  },
  {
    linkRef: '/elements',
    imgName: 'mountains.jpg',
    text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.'
  },
  {
    linkRef: '/generic',
    imgName: 'notebook.jpg',
    text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.'
  }
]

@Component({
  selector: 'app-sidebar-posts',
  templateUrl: './sidebar-posts.component.html',
  styleUrls: ['./sidebar-posts.component.scss']
})

export class SidebarPostsComponent {
  private readonly _postsContent: IPostContent[]

  constructor () {
    this._postsContent = postsContent
  }

  get postsContent (): IPostContent[] {
    return this._postsContent
  }
}
