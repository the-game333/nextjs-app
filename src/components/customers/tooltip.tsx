// material-ui
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

// ==============================|| customer Tooltip Button ||============================== //

const TooltipButton = ({ text, image, description }: { text: String; image?: String; description?: string }) => {
  const theme = useTheme();
  // const router = useRouter();

  return (
    <Stack
      style={{
        cursor: 'pointer',
        padding: '6px 12px',
        borderRadius: 6
      }}
      direction={description ? 'column' : 'row'}
      alignItems={description ? '' : 'center'}
      sx={{
        '&:hover': {
          backgroundColor: '#0f172a'
        }
      }}
      gap={'10px'}
    >
      {image && (
        <Box
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box component={'img'} src={`/assets/images/${image}.png`} width={'100%'} height={'auto'} />
        </Box>
      )}
      <Typography sx={{ color: 'rgb(255, 255, 255)' }} variant="h4">
        {text}
      </Typography>
      {description && (
        <Typography sx={{ color: 'rgb(255, 255, 255, 0.45)' }} variant="subtitle2">
          {description}
        </Typography>
      )}
    </Stack>
  );
};

export default TooltipButton;
