import {createContext} from 'react';

export const GeneralContext = createContext({
    volume:1,
    pan: 0,
    feedback: 0,
    mix: 0,
    gain: 0,
    time: 0
});