import { createContext } from 'react';

export const DefaultSounds = createContext({
    defaultSounds: [
        {
            id: 0,
            name: 'guitar',
            url: '/sound-interaction/resources/sounds/guitar.wav',
            vol: 1,
            pan: 0,
            effects: {
            },
            deleted: false,
        }
    ]
});