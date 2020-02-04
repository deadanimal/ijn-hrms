import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ReportComponent } from './report/report.component';
import { TalentAcquisitionComponent } from './talent-acquisition/talent-acquisition.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { ClaimManagementComponent } from './claim-management/claim-management.component';
import { PayrollManagementComponent } from './payroll-management/payroll-management.component';
import { PerformanceManagementComponent } from './performance-management/performance-management.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'talent-acquisition',
                component: TalentAcquisitionComponent
            },
            {
                path: 'leave-management',
                component: LeaveManagementComponent
            },
            {
                path: 'claim-management',
                component: ClaimManagementComponent
            },
            {
                path: 'payroll-management',
                component: PayrollManagementComponent
            },
            {
                path: 'performance-management',
                component: PerformanceManagementComponent
            }
        ]
    }
]