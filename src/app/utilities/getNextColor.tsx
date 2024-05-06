import {
  LightType,
  trafficLightOrder,
} from '../components/crossroads/Crossroads';

type NextColorSettings = (currentColor: LightType) => LightType;

// determines which is the next color
export const getNextColor: NextColorSettings = (currentColor) => {
  const currentColorIndex = trafficLightOrder.indexOf(currentColor);
  const nextColorIndex = (currentColorIndex + 1) % trafficLightOrder.length;
  return trafficLightOrder[nextColorIndex] as LightType;
};
