import React from 'react';
import { SideNavBar } from '../../components/SideNavBar/SideNavBar';
import { SoundContainer } from '../SoundContainer/SoundContainer';
import { SoundEffectsContainer } from '../SoundEffectsContainer/SoundEffectsContainer';
import { SoundPropsContainer } from '../SoundPropsContainer/SoundPropsContainer';
import './App.css';
import { BrowserRouter, HashRouter, Link, MemoryRouter, Route } from 'react-router-dom';
import { GeneralSoundProps } from '../GeneralSoundProps/GeneralSoundProps';
import { GeneralContext } from '../../utils/GeneralContext';


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

    const [sound, setSounds] = React.useState(userSounds);
    const [volume, setVolume] = React.useState(1);
    const [pan, setPan] = React.useState(0);

    const handleVolumeChange = (volume:number) =>{
        console.log(volume+" DESDE APP");
        setVolume(volume);
    }
    const handlePanChange = (pan:number) =>{
        console.log(pan+" DESDE APP");
        setPan(pan);
    }

    return (
        <GeneralContext.Provider value={{volume, pan}}>
        <main className="app">

            <SideNavBar />
            <section className="app__content">
                <SoundContainer pan={pan}>
                </SoundContainer>
                <GeneralSoundProps volumeChange={handleVolumeChange} panChange={handlePanChange}/>
                <article className="app__contentPanels">
                    <SoundPropsContainer />
                    <SoundEffectsContainer />
                </article>
            </section>

        </main>
        </GeneralContext.Provider>
    );
}