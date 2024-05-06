import { Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

import { useMemo } from 'react';
import Light from './Light';

export interface TrafficLightProps {
  rotate?: boolean;
  lightAmount?: number;
  lightOn?: string;
}

export function TrafficLight({
  rotate,
  lightAmount = 3,
  lightOn,
}: TrafficLightProps) {
  const lightConfiguration = useMemo(() => {
    const lights =
      lightAmount === 3 ? ['red', 'yellow', 'green'] : ['red', 'green'];
    return lights.map((light) => ({
      light,
      on: lightOn?.includes(light),
    }));
  }, [lightAmount, lightOn]);

  return (
    <Stack
      p="0.3rem"
      direction={rotate ? 'row-reverse' : 'column'}
      sx={{ bgcolor: grey[800], borderRadius: '0.3rem' }}
      spacing={0.5}
    >
      {lightConfiguration.map(({ light, on }) => (
        <Light color={on ? light : ''} key={light} />
      ))}
    </Stack>
  );
}

export default TrafficLight;
