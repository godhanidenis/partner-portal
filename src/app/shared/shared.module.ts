import { NgModule } from '@angular/core';
import { TwoDigitDecimaNumberDirective } from './directives/two-digit-decimal-number.directive';
import { UtcTimeToIstTimeConverterPipe } from './pipes/utctime-to-local';
import { utcDateToLocalConverterPipe } from './pipes/utcdate-to-local';

@NgModule({
  declarations: [
    TwoDigitDecimaNumberDirective,
    UtcTimeToIstTimeConverterPipe,
    utcDateToLocalConverterPipe,
  ],
  imports: [],
  exports: [
    TwoDigitDecimaNumberDirective,
    UtcTimeToIstTimeConverterPipe,
    utcDateToLocalConverterPipe,
  ],
})
export class SharedModule {}
