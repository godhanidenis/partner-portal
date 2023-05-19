import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnSectionComponent } from './return-section/return-section.component';

const routes: Routes = [
  {
    path: 'return-section',
    component: ReturnSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnsRoutingModule {}
