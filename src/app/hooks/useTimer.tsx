import { MutableRefObject, useEffect } from 'react';
import {
  ActionType,
  LightType,
  TimerSettings,
  trafficLightDuration,
} from '../components/crossroads/Crossroads';

const trafficLightTransitionPeriod = 1000;

type HookTimerSettings = (
  actionType: ActionType,
  timerIdRef: MutableRefObject<number | null>,
  light: LightType,
  setTimer: TimerSettings
) => void;

// controls the timers for the individual traffic light phases
export const useTimer: HookTimerSettings = (
  actionType,
  timerIdRef,
  light,
  setTimer
) => {
  useEffect(() => {
    let timerId = timerIdRef.current;

    timerId = window.setTimeout(
      () => setTimer(actionType, light, timerId),
      trafficLightDuration[light] + trafficLightTransitionPeriod
    );

    return () => {
      timerId !== null && clearTimeout(timerId);
    };
  }, [light, setTimer, timerIdRef, actionType]);
};
