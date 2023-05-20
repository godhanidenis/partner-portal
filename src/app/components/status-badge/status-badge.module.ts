import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { StatusBadgeComponent } from './status-badge.component';

@NgModule({
  declarations: [StatusBadgeComponent],
  imports: [CommonModule, NzMenuModule,FormsModule, ReactiveFormsModule, NzDropDownModule, NzIconModule],
  exports: [StatusBadgeComponent],
})
export class StatusBadgeModule {}
