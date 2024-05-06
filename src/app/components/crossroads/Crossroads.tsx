import { Box, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import TrafficLight from '../trafficLight/TrafficLight';
import { QuadrantStack } from './styles/QuadrantStack';
import { useTimer } from '../../hooks/useTimer';
import { PedestrianButton } from './styles/PedestrianButton';
import { Task } from './Task';
import { getNextColor } from '../../utilities/getNextColor';
import { lightControlReducer } from '../../utilities/lightControlReducer';
import { FurtherOptimizations } from './FurtherOptimizations';

export interface StateInterface {
  lightCarOne: LightType;
  lightCarTwo: LightType;
  lightPedestrian: LightType;
}
export type LightType = 'green' | 'yellow' | 'red' | 'red-yellow';
export type ActionType =
  | 'CHANGE_LIGHT_CAR_ONE'
  | 'CHANGE_LIGHT_CAR_TWO'
  | 'CHANGE_LIGHT_PEDESTRIAN';

export type TimerSettings = (
  ActionType: ActionType,
  light: LightType,
  timerId: number | null
) => void;

const initSateTrafficLight: StateInterface = {
  lightCarOne: 'green',
  lightCarTwo: 'red',
  lightPedestrian: 'red',
};
export const trafficLightOrder = ['red', 'red-yellow', 'green', 'yellow'];
export const trafficLightTransitionPeriod = 1000;
export const trafficLightDuration = {
  red: 2000,
  'red-yellow': 2000,
  green: 5000,
  yellow: 1000,
};

function Crossroads() {
  const [running, setRunning] = useState(false);
  const [isPedestrian, setIsPedestrian] = useState(false);
  const [delayLightCar, setDelayLightCar] = useState(false);
  const [state, dispatch] = useReducer(
    lightControlReducer,
    initSateTrafficLight
  );

  const timerIdCarOneRef = useRef<number | null>(null);
  const timerIdCarTwoRef = useRef<number | null>(null);

  // controls the traffic lights
  const setTimer: TimerSettings = useCallback(
    (ActionType, light, timerId) => {
      if (
        !running ||
        (isPedestrian && light === 'red') ||
        (delayLightCar &&
          ActionType === 'CHANGE_LIGHT_CAR_TWO' &&
          light === 'red')
      )
        return;

      const nextColor = getNextColor(light);
      dispatch({
        type: ActionType,
        stateLight: nextColor,
      });
      const nextColorDuration = trafficLightDuration[nextColor];
      timerId = window.setTimeout(setTimer, nextColorDuration);
    },
    [delayLightCar, isPedestrian, running]
  );

  // controls the delayed start of the traffic light after pedestrians
  useEffect(() => {
    isPedestrian && setDelayLightCar(true);
    !isPedestrian && state.lightCarOne === 'green' && setDelayLightCar(false);
  }, [isPedestrian, state.lightCarOne]);

  // starts the interval for traffic light 1
  useTimer(
    'CHANGE_LIGHT_CAR_ONE',
    timerIdCarOneRef,
    state.lightCarOne,
    setTimer
  );

  // starts the interval for traffic light 2
  useTimer(
    'CHANGE_LIGHT_CAR_TWO',
    timerIdCarTwoRef,
    state.lightCarTwo,
    setTimer
  );

  // controls the pedestrian lights
  useEffect(() => {
    if (!running) return;
    if (!isPedestrian) return;
    if (state.lightCarOne !== 'red') return;
    if (state.lightCarTwo !== 'red') return;

    dispatch({
      type: 'CHANGE_LIGHT_PEDESTRIAN',
      stateLight: 'green',
    });
    const timerIdPedestrian = setTimeout(() => {
      dispatch({ type: 'CHANGE_LIGHT_PEDESTRIAN', stateLight: 'red' });
      setIsPedestrian(false);
    }, trafficLightDuration[state.lightPedestrian]);

    return () => clearTimeout(timerIdPedestrian);
  }, [
    isPedestrian,
    running,
    state.lightCarOne,
    state.lightCarTwo,
    state.lightPedestrian,
  ]);

  return (
    <>
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
            <TrafficLight rotate={true} lightOn={state.lightCarOne} />
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
              <TrafficLight lightAmount={2} lightOn={state.lightPedestrian} />
              <PedestrianButton
                aria-label="Fußgängerüberwegbutton"
                onClick={() => {
                  running && setIsPedestrian(!isPedestrian);
                }}
                className={
                  isPedestrian && state.lightPedestrian === 'red'
                    ? 'blinking'
                    : ''
                }
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
            <TrafficLight lightOn={state.lightCarTwo} />
          </QuadrantStack>
        </Stack>
      </Stack>
      <FurtherOptimizations />
      <Task />
    </>
  );
}

export default Crossroads;
