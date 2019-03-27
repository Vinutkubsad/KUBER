import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: "filterPipe"
})
@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      args = args.toUpperCase();
    }
    return value.filter(items => {
      return (
        items.userDetails.Name.toUpperCase().startsWith(args.toUpperCase()) == true
      );
    });
  }
}
