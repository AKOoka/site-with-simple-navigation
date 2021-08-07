import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'imgSrc' })

export class ImgSrcPipe implements PipeTransform {
  transform (value: string): string {
    return '../../assets/images/' + value
  }
}
