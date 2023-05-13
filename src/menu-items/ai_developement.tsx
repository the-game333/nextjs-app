// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';

// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const ai_developement = {
  id: 'ai_developement',
  title: <FormattedMessage id="ai_developement" />,
  type: 'group',
  children: [
    {
      id: 'lang_chain_app',
      title: <FormattedMessage id="lang_chain_app" />,
      type: 'item',
      icon: icons.IconPictureInPicture,

    },
    {
      id: 'auto_gpt_app',
      title: <FormattedMessage id="plugins" />,
      type: 'item',
      icon: icons.IconForms,

    },
    {
      id: 'government_ai',
      title: <FormattedMessage id="government_ai" />,
      type: 'item',
      icon: icons.IconForms,

    },
    {
      id: 'enterprise_ai',
      title: <FormattedMessage id="enterprise_ai" />,
      type: 'item',
      icon: icons.IconBorderAll,

    },
  ]
};

export default ai_developement;

// {
//   id: 'charts',
//   title: <FormattedMessage id="charts" />,
//   type: 'collapse',
//   icon: icons.IconChartDots,
//   children: [
//     {
//       id: 'apexchart',
//       title: <FormattedMessage id="apexchart" />,
//       type: 'item',
//       url: '/forms/charts/apexchart',
//       breadcrumbs: false
//     },
//     {
//       id: 'organization-chart',
//       title: <FormattedMessage id="organization-chart" />,
//       type: 'item',
//       url: '/forms/charts/orgchart',
//       breadcrumbs: false
//     }
//   ]
// },
// {
//   id: 'forms-validation',
//   title: <FormattedMessage id="forms-validation" />,
//   type: 'item',
//   url: '/forms/forms-validation',
//   icon: icons.IconClipboardCheck
// },
// {
//   id: 'forms-wizard',
//   title: <FormattedMessage id="forms-wizard" />,
//   type: 'item',
//   url: '/forms/forms-wizard',
//   icon: icons.IconStairsUp
// }
