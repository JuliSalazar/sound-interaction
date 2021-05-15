export interface MainReducerState {
  id: number,
  name: string,
  soundUrl: string,
  vol: number,
  pan: number,
  //Delay
  feedback: number,
  time: number,
  mix: number,
  //Distortion
  gain: number,

}

export const initialMainReducerState: MainReducerState = {
  id: -1,
  name: '',
  soundUrl: '',
  vol: 1,
  pan: 0,
  //Delay
  feedback: 0,
  time: 0,
  mix: 0,
  //Distortion
  gain: 0
}

export type MainReducerAction = {
  type: 'increment' | 'decrement' | 'reset' | 'eat' | 'born';
} | {
  type: 'changeVol';
  vol: number;
};

export function mainReducer(currentState: MainReducerState, action: MainReducerAction) {
  switch (action.type) {
    case 'changeVol':
      return {
        ...currentState,
        vol: action.vol || 1,
        
      };
    default:
      throw new Error();
  }
}