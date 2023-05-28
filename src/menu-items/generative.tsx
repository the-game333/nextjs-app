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
      id: 'image',
      title: <FormattedMessage id="image" />,
      type: 'item',
      url: '/dashboard/images',
      icon: icons.PhotoSizeSelectActual
    },
    {
      id: 'text',
      title: <FormattedMessage id="Text" />,
      type: 'item',
      url: '/dashboard/texts',
      icon: icons.IconCursorText
    },
    {
      id: 'voice',
      title: <FormattedMessage id="voice" />,
      type: 'item',
      url: '/widget/chart',
      icon: icons.KeyboardVoice
    }
  ]
};

export default GenerativeAI;
