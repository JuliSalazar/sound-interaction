import {createContext} from 'react';
export type SoundItemType = {
    id: number,
    name: string,
    soundUrl: string,
    vol: number,
    pan: number,
    rate: number,
    //Delay;
    feedback: number,
    time: number,
    mix: number,
    //Reverb
    reverbTime: number,
    decayRate: number,
    dryWet:number,
    //
    distortion: boolean,
    //SoundFile
    sound: any,
}

export const GeneralContext = createContext({
    predeterminateSounds: [] as SoundItemType[],
    onSoundItemClick: (id: number) => {},
    onSoundItemAdd: (id: number) => {},
    onSoundItemStop: (id: number) => {},
});