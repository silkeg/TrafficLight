import { Box, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useEffect, useRef, useState } from 'react';
import TrafficLight from '../trafficLight/TrafficLight';
import { QuadrantStack } from './styles/QuadrantStack';
import { useTimer } from '../../hooks/useTimer';
import { PedestrianButton } from './styles/PedestrianButton';

function Crossroads() {
  const [running, setRunning] = useState(false);
  const [isPedestrian, setIsPedestrian] = useState(false);
  const [isPedestrianButton, setIsPedestrianButton] = useState(false);
  const [isTrafficLightOne, setIsTrafficLightOne] = useState(false);
  const [isTrafficLightTwo, setIsTrafficLightTwo] = useState(false);

  const timerIdCarOneRef = useRef<number | null>(null);
  const timerIdCarTwoRef = useRef<number | null>(null);
  const timerIdPedestrianRef = useRef<number | null>(null);

  // init traffic light 1
  const [stateCarLightOne] = useTimer(
    'CHANGE_LIGHT_CAR',
    timerIdCarOneRef,
    isTrafficLightOne,
    running,
    'green'
  );

  // init traffic light 2
  const [stateCarLightTwo] = useTimer(
    'CHANGE_LIGHT_CAR',
    timerIdCarTwoRef,
    isTrafficLightTwo,
    running
  );

  // init PedestianLight
  const [statePedestrian] = useTimer(
    'CHANGE_LIGHT_PEDESTRIAN',
    timerIdPedestrianRef,
    isPedestrian,
    running
  );

  // controls the light
  useEffect(() => {
    isPedestrianButton && stateCarLightOne.lightCar === 'red'
      ? setIsTrafficLightOne(false)
      : statePedestrian.lightPedestian === 'red' && setIsTrafficLightOne(true);

    isPedestrianButton && stateCarLightTwo.lightCar === 'red'
      ? setIsTrafficLightTwo(false)
      : stateCarLightOne.lightCar === 'green' && setIsTrafficLightTwo(true);

    !isTrafficLightOne && !isTrafficLightTwo
      ? setIsPedestrian(true)
      : setIsPedestrian(false);

    statePedestrian.lightPedestian === 'green' && setIsPedestrianButton(false);
  }, [
    isPedestrianButton,
    isTrafficLightOne,
    isTrafficLightTwo,
    stateCarLightOne.lightCar,
    stateCarLightTwo.lightCar,
    statePedestrian.lightPedestian,
  ]);

  return (
    <Stack bgcolor={grey[200]}>
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        marginBlock="2rem"
      >
        Traffic Lights Demo
      </Typography>
      <Box>
        <Button
          onClick={() => setRunning(!running)}
          variant="contained"
          size="small"
          sx={{ marginLeft: '6rem' }}
        >
          {running ? 'Stop' : 'Start'}
        </Button>
      </Box>
      <Stack
        m="0.5rem"
        minWidth="30rem"
        minHeight="30rem"
        direction="row"
        flexWrap="wrap"
      >
        <QuadrantStack
          alignItems="end"
          justifyContent="end"
          p="2rem"
          sx={{ borderWidth: '0 2rem 2rem 0' }}
        >
          <TrafficLight rotate={true} lightOn={stateCarLightOne.lightCar} />
        </QuadrantStack>

        <QuadrantStack
          pr="10%"
          justifyContent="end"
          alignItems="end"
          sx={{ borderWidth: '0 0 2rem 2rem' }}
        >
          <Stack
            alignItems="center"
            mb="-4.15rem"
            direction="column"
            gap="1rem"
          >
            <TrafficLight
              lightAmount={2}
              lightOn={statePedestrian.lightPedestian}
            />
            <PedestrianButton
              aria-label="Fußgängerüberwegbutton"
              onClick={() => {
                running && setIsPedestrianButton(true);
              }}
              className={isPedestrianButton ? 'blinking' : ''}
            >
              <span role="img" aria-label="Image Button">
                ⦿
              </span>
            </PedestrianButton>
            <Box
              position="relative"
              zIndex="2"
              width="8rem"
              height="4rem"
              sx={{
                border: '0.1rem solid white',
                background: `repeating-linear-gradient( to bottom, white, white 0.5rem, ${grey[500]} 0.5rem, ${grey[500]} 1.2rem)`,
              }}
            ></Box>
          </Stack>
        </QuadrantStack>

        <QuadrantStack sx={{ borderWidth: '2rem 2rem 0 0;' }}></QuadrantStack>

        <QuadrantStack
          alignItems="start"
          justifyContent="start"
          p="2rem"
          sx={{ borderWidth: '2rem 0 0 2rem' }}
        >
          <TrafficLight lightOn={stateCarLightTwo.lightCar} />
        </QuadrantStack>
      </Stack>
    </Stack>
  );
}

export default Crossroads;
