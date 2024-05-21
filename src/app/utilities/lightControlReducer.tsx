import { getNextColor, getNextColorPedestian } from './getNextColor';

export type LightType = 'green' | 'yellow' | 'red' | 'red-yellow';
export type LightPedestianType = 'green' | 'red';

export interface StateInterface {
  light: LightType | LightPedestianType;
}

export type ActionType = 'CHANGE_LIGHT_CAR' | 'CHANGE_LIGHT_PEDESTRIAN';
type ReducerActionType =
  | {
      type: 'CHANGE_LIGHT_CAR';
      light: LightType;
    }
  | { type: 'CHANGE_LIGHT_PEDESTRIAN'; light: LightPedestianType };

type lightControlReducerSettings = (
  state: StateInterface,
  action: ReducerActionType
) => StateInterface;

export const lightControlReducer: lightControlReducerSettings = (
  state,
  action
) => {
  switch (action.type) {
    case 'CHANGE_LIGHT_CAR':
      return { ...state, light: getNextColor(action.light) };
    case 'CHANGE_LIGHT_PEDESTRIAN':
      return {
        ...state,
        light: getNextColorPedestian(action.light),
      };
    default:
      return state;
  }
};
