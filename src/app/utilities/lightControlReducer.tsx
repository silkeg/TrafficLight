import { LightType, StateInterface } from '../components/crossroads/Crossroads';

type ReducerActionType =
  | {
      type: 'CHANGE_LIGHT_CAR_ONE';
      stateLight: LightType;
    }
  | {
      type: 'CHANGE_LIGHT_CAR_TWO';
      stateLight: LightType;
    }
  | { type: 'CHANGE_LIGHT_PEDESTRIAN'; stateLight: LightType };

type lightControlReducerSettings = (
  state: StateInterface,
  action: ReducerActionType
) => StateInterface;

export const lightControlReducer: lightControlReducerSettings = (
  state,
  action
) => {
  switch (action.type) {
    case 'CHANGE_LIGHT_CAR_ONE':
      return { ...state, lightCarOne: action.stateLight };
    case 'CHANGE_LIGHT_CAR_TWO':
      return { ...state, lightCarTwo: action.stateLight };
    case 'CHANGE_LIGHT_PEDESTRIAN':
      return { ...state, lightPedestrian: action.stateLight };
    default:
      return state;
  }
};
