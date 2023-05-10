import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AchSetUpComponent } from './ach-set-up/ach-set-up.component';
// import { AchVerificationComponent } from './ach-verification/ach-verification.component';
import { AchSectionComponent } from './ach-section/ach-section.component';

const routes: Routes = [
  { path: 'ach-section', component: AchSectionComponent },
  // { path: 'ach-verification', component: AchVerificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
