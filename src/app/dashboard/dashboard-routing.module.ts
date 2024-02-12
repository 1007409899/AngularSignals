import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutsComponent } from '../auth/layouts/authLayouts/authLayouts.component';
import { DashboardLayoutsComponent } from './layouts/dashboardLayouts/dashboardLayouts.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutsComponent,
 //children : []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
