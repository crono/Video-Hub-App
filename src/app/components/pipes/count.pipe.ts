import { Pipe, PipeTransform } from '@angular/core';

import { ShowLimitService } from './show-limit.service';

@Pipe({
  name: 'countPipe'
})
export class CountPipe implements PipeTransform {

  constructor(
    public showLimitService: ShowLimitService
  ) { }

  /**
   * Return only items that match search string
   * @param finalArray
   * @param itemLimit    {number} Maximum number of items to show in results
   */
  transform(finalArray: any, itemLimit?: number): any {

    this.showLimitService.showResults(finalArray.length, finalArray.length);

    return finalArray;
  }

}
