import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newpipe'
})
export class NewpipePipe implements PipeTransform {

  revers:number=0

  transform(value: string, ...args: unknown[]): any {
   return this.revers= value.length
  }

}
    