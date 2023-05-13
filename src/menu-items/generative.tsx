// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardList, IconChartInfographic, IconCursorText } from '@tabler/icons';
import { PhotoSizeSelectActual, KeyboardVoice } from '@mui/icons-material';
// constant
const icons = {
  IconClipboardList,
  IconChartInfographic,
  IconCursorText,
  PhotoSizeSelectActual,
  KeyboardVoice
};

// ==============================|| WIDGET MENU ITEMS ||============================== //

const GenerativeAI = {
  id: 'generative_ai',
  title: <FormattedMessage id="generative ai" />,
  type: 'group',
  children: [
    {
      id: 'text',
      title: <FormattedMessage id="text" />,
      type: 'item',
      url: '/widget/statistics',
      icon: icons.IconCursorText
    },
    {
      id: 'image',
      title: <FormattedMessage id="image" />,
      type: 'item',
      url: '/widget/data',
      icon: icons.PhotoSizeSelectActual
    },
    {
      id: 'voice',
      title: <FormattedMessage id="Voice" />,
      type: 'item',
      url: '/widget/chart',
      icon: icons.KeyboardVoice
    }
  ]
};

export default GenerativeAI;
