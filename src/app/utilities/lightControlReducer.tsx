import { getNextColor, getNextColorPedestian } from './getNextColor';

export type LightType = 'green' | 'yellow' | 'red' | 'red-yellow';
export type LightPedestianType = 'green' | 'red';

export interface StateInterface {
  lightCar: LightType;
  lightPedestian: LightPedestianType;
}

export type ActionType = 'CHANGE_LIGHT_CAR' | 'CHANGE_LIGHT_PEDESTRIAN';
type ReducerActionType =
  | {
      type: 'CHANGE_LIGHT_CAR';
      lightCar: LightType;
    }
  | { type: 'CHANGE_LIGHT_PEDESTRIAN'; lightPedestian: LightPedestianType };

type lightControlReducerSettings = (
  state: StateInterface,
  action: ReducerActionType
) => StateInterface;

export const lightControlReducer = (
  state: StateInterface,
  action: ReducerActionType
) => {
  switch (action.type) {
    case 'CHANGE_LIGHT_CAR':
      return { ...state, lightCar: getNextColor(action.lightCar) };
    case 'CHANGE_LIGHT_PEDESTRIAN':
      return {
        ...state,
        lightPedestian: getNextColorPedestian(action.lightPedestian),
      };
    default:
      return state;
  }
};
