// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconDatabase, IconZoomQuestion } from '@tabler/icons';
import { Explore, Storage } from '@mui/icons-material';
import { OverrideIcon } from 'types';

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics,
  IconDatabase,
  IconZoomQuestion,
  Explore,
  Storage
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

interface DashboardMenuProps {
  id: string;
  title: React.ReactNode | string;
  type: string;
  children: {
    id: string;
    title: React.ReactNode | string;
    type: string;
    url: string;
    icon: OverrideIcon;
    breadcrumbs: boolean;
  }[];
}

const dashboard: DashboardMenuProps = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  children: [
    // {
    //   id: 'dashboard',
    //   title: <FormattedMessage id="dashboard" />,
    //   type: 'item',
    //   url: '/dashboard',
    //   icon: icons.IconDashboard,
    //   breadcrumbs: false
    // },
    {
      id: 'default',
      title: <FormattedMessage id="Default" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'explore',
      title: <FormattedMessage id="Explore" />,
      type: 'item',
      url: '/dashboard/explore',
      icon: icons.Explore,
      breadcrumbs: false
    },
    {
      id: 'analytics',
      title: <FormattedMessage id="Data" />,
      type: 'item',
      url: '/dashboard/data',
      icon: icons.Storage,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
