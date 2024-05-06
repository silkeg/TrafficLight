import { Box } from '@mui/material';
import { grey, red, yellow, green } from '@mui/material/colors';

export interface LightProps {
  color?: string;
}

export function Light({ color }: LightProps) {
  let fillColor = color;
  switch (color) {
    case 'red':
      fillColor = red[600];
      break;
    case 'yellow':
      fillColor = yellow[600];
      break;
    case 'green':
      fillColor = green[600];
      break;
    default:
      fillColor = grey[500];
  }
  return (
    <Box
      sx={{ bgcolor: fillColor, borderRadius: '50%' }}
      width="1.6rem"
      height="1.6rem"
    />
  );
}

export default Light;
