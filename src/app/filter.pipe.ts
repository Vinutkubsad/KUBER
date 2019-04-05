import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter',
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, subfield: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    } 
    value = value.toLowerCase();
    
    return items.filter((item) => {
      var match = subfield?item[field][subfield]?item[field][subfield].toLowerCase():'':item[field].toLowerCase();
      return match.indexOf(value) !== -1
    });
  }
}
