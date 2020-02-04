import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  BsDatepickerModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(
  FusionCharts, 
  Charts,
  Widgets,
  FusionTheme,
  PowerCharts
);

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ManagementComponent } from './management/management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportComponent } from './report/report.component';
import { TalentAcquisitionComponent } from './talent-acquisition/talent-acquisition.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { ClaimManagementComponent } from './claim-management/claim-management.component';
import { PayrollManagementComponent } from './payroll-management/payroll-management.component';
import { PerformanceManagementComponent } from './performance-management/performance-management.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    AnalyticsComponent,
    ReportComponent,
    TalentAcquisitionComponent,
    LeaveManagementComponent,
    ClaimManagementComponent,
    PayrollManagementComponent,
    PerformanceManagementComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    FusionChartsModule,
    LeafletModule,
    BsDatepickerModule.forRoot()
  ]
})
export class AdminModule { }
