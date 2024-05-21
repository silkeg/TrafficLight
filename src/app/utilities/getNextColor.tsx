import { LightPedestianType, LightType } from './lightControlReducer';

type NextColorSettings = (currentColor: LightType) => LightType;
const trafficLightOrder = ['red', 'red-yellow', 'green', 'yellow'];

// determines which is the next color
export const getNextColor: NextColorSettings = (currentColor) => {
  const currentColorIndex = trafficLightOrder.indexOf(currentColor);
  const nextColorIndex = (currentColorIndex + 1) % trafficLightOrder.length;
  return trafficLightOrder[nextColorIndex] as LightType;
};

type NextColorPedestianSettings = (
  currentColor: LightPedestianType
) => LightPedestianType;
const trafficLightOrderPedestian = ['red', 'green'];

export const getNextColorPedestian: NextColorPedestianSettings = (
  currentColor
) => {
  const currentColorIndex = trafficLightOrderPedestian.indexOf(currentColor);
  const nextColorIndex =
    (currentColorIndex + 1) % trafficLightOrderPedestian.length;
  return trafficLightOrderPedestian[nextColorIndex] as LightPedestianType;
};
