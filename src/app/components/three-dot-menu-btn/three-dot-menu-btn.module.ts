import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThreeDotMenuBtnComponent } from './three-dot-menu-btn.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [ThreeDotMenuBtnComponent],
  imports: [CommonModule, NzMenuModule,FormsModule, ReactiveFormsModule, NzDropDownModule, NzIconModule],
  exports: [ThreeDotMenuBtnComponent],
})
export class ThreeDotMenuBtnModule {}
