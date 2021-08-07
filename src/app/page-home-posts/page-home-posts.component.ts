import { Component } from '@angular/core'

interface IPostsContent {
  imgName: string
  linkRef: string
  headingText: string
  paragraphText: string
}

const postsContent: IPostsContent[] = [
  {
    imgName: 'woman-with-hat.jpg',
    linkRef: '/element',
    headingText: 'Interdum aenean',
    paragraphText: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
  },
  {
    imgName: 'tools.jpg',
    linkRef: '/generic',
    headingText: 'Nulla amet dolore',
    paragraphText: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
  },
  {
    imgName: 'woman-with-car.jpg',
    linkRef: '/elements',
    headingText: 'Tempus ullamcorper',
    paragraphText: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
  },
  {
    imgName: 'man-sitting.jpg',
    linkRef: '/elements',
    headingText: 'Sed etiam facilis',
    paragraphText: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
  },
  {
    imgName: 'man-with-hat.jpg',
    linkRef: '/generic',
    headingText: 'Feugiat lorem aenean',
    paragraphText: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
  },
  {
    imgName: 'old-camera.jpg',
    linkRef: '/generic',
    headingText: 'Amet varius aliquam',
    paragraphText: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
  }
]

@Component({
  selector: 'app-page-home-posts',
  templateUrl: './page-home-posts.component.html',
  styleUrls: ['./page-home-posts.component.scss']
})

export class PageHomePostsComponent {
  private readonly _postsContent: IPostsContent[]

  get postsContent (): IPostsContent[] {
    return this._postsContent
  }

  constructor () {
    this._postsContent = postsContent
  }
}
