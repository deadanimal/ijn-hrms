export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/admin/talent-acquisition',
    title: 'Talent Acquisition',
    type: 'link',
    icontype: 'fas fa-users text-indigo'
  },
  {
    path: '/admin/leave-management',
    title: 'Leave Management',
    type: 'link',
    icontype: 'far fa-calendar-check text-orange'
  },
  {
    path: '/admin/claim-management',
    title: 'Benefits Management',
    type: 'link',
    icontype: 'fas fa-file-invoice-dollar text-blue'
  },
  {
    path: '/admin/payroll-management',
    title: 'Payroll Management',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/admin/performance-management',
    title: 'Performance Management',
    type: 'link',
    icontype: 'fas fa-chart-bar text-purple'
  },
  {
    path: '/admin/report',
    title: 'Report',
    type: 'link',
    icontype: 'far fa-file-alt text-yellow'
  }
];

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/