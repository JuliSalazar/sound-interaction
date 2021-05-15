import {createContext} from 'react';
import { getImageSrc } from './getImageSrc';

export type SoundItemType = {
    id: number,
    name: string,
    soundUrl: string,
    vol: number,
    pan: number,
    //Delnumber;
    feedback: number,
    time: number,
    mix: number,
    //Distortion
    gain: number,
    sound: any,
}

export const GeneralContext = createContext({
    predeterminateSounds: [] as SoundItemType[],
    onSoundItemClick: (id: number) => {},
    onSoundItemAdd: (id: number) => {},
});