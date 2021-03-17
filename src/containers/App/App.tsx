import React from 'react';
import { SoundPropsContainer } from '../SoundPropsContainer/SoundPropsContainer';
import './App.css';

const userSounds = [
    {
        id: 0,
        vol: 0,
        pan: 0,
        effects: {
            eq: {
                frecuency: 0,
                gain: 0,
            }

        }
    },
];

export const App = () => {

    const [ sound, setSounds ] = React.useState(userSounds);
    const [ value, setValue ] = React.useState(1);

   
    return (
        <main>
       {
           <SoundPropsContainer/>
       } 
        
        </main>
        );
}