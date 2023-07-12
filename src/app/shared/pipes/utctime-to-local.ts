import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'utcTimeToLocalTimeConverter'
})
export class UtcTimeToIstTimeConverterPipe implements PipeTransform{
    transform(time: string) {
      var local = moment.utc(time).local().format('hh:mm a');
      return local;
    }
}