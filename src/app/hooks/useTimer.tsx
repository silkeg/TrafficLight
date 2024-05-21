import { MutableRefObject, useEffect, useReducer } from 'react';
import {
  ActionType,
  LightPedestianType,
  LightType,
  StateInterface,
  lightControlReducer,
} from '../utilities/lightControlReducer';

export const trafficLightDuration = {
  red: 2000,
  'red-yellow': 2000,
  green: 5000,
  yellow: 1000,
  transitionPeriod: 1000,
};

type HookTimerSettings = (
  actionType: ActionType,
  timerIdRef: MutableRefObject<number | null>,
  isTrafficLight: boolean,
  running: boolean,
  initColor?: 'red' | 'green'
) => StateInterface[];

// controls the timers for the individual traffic light phases
export const useTimer: HookTimerSettings = (
  actionType,
  timerIdRef,
  isTrafficLight,
  running,
  initColor = 'red'
) => {
  const [state, dispatch] = useReducer(lightControlReducer, {
    lightCar: initColor,
    lightPedestian: initColor,
  });
  useEffect(() => {
    if (!isTrafficLight || !running) return;

    let timerId = timerIdRef.current;

    timerId = window.setTimeout(() => {
      if (actionType === 'CHANGE_LIGHT_CAR') {
        dispatch({
          type: actionType,
          lightCar: state.lightCar as LightType,
        });
      }
      if (actionType === 'CHANGE_LIGHT_PEDESTRIAN') {
        dispatch({
          type: actionType,
          lightPedestian: state.lightPedestian as LightPedestianType,
        });
      }
    }, trafficLightDuration[actionType === 'CHANGE_LIGHT_CAR' ? state.lightCar : state.lightPedestian] + trafficLightDuration.transitionPeriod);

    return () => {
      timerId !== null && clearTimeout(timerId);
    };
  }, [
    actionType,
    isTrafficLight,
    running,
    state.lightCar,
    state.lightPedestian,
    timerIdRef,
  ]);
  return [state];
};
