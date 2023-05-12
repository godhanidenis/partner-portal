import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPreferencesComponent } from './contact-preferences/contact-preferences.component';
import { NotificationPreferencesComponent } from './notification-preferences/notification-preferences.component';

const routes: Routes = [
  {
    path: 'contact-preferences',
    component: ContactPreferencesComponent,
  },
  {
    path: 'notification-preferences',
    component: NotificationPreferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationsRoutingModule {}
