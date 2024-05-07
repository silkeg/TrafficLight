import { LightType } from '../components/crossroads/Crossroads';

type NextColorSettings = (currentColor: LightType) => LightType;
const trafficLightOrder = [
  'red',
  'transitionPeriodRY',
  'red-yellow',
  'transitionPeriodG',
  'green',
  'transitionPeriodY',
  'yellow',
  'transitionPeriodR',
];

// determines which is the next color
export const getNextColor: NextColorSettings = (currentColor) => {
  const currentColorIndex = trafficLightOrder.indexOf(currentColor);
  const nextColorIndex = (currentColorIndex + 1) % trafficLightOrder.length;
  return trafficLightOrder[nextColorIndex] as LightType;
};
