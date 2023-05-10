import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { W9SetupComponent } from './w9-setup/w9-setup.component';
import { CertiOfInsuComponent } from './certi-of-insurance/certi-of-insurance.component';


const routes: Routes = [{ path: 'company-profile', component: CompanyProfileComponent },
                        { path: 'w9-setup', component: W9SetupComponent },
                        { path: 'certi-of-insu', component: CertiOfInsuComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
