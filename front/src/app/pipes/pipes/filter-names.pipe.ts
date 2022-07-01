import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamesPipe implements PipeTransform {

  transform(list: any, filter: string = "") {
    if(filter !== undefined){
      const lowerCaseFilter: string = filter.toLowerCase().trim();

      const filteredList: any = list.filter((element: any) => {
        return element.name.toLowerCase().includes(lowerCaseFilter);
      });

      return filteredList;
    }
  }
}
