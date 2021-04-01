import React from 'react';
import { SideNavBar } from '../../components/SideNavBar/SideNavBar';
import { SoundContainer } from '../SoundContainer/SoundContainer';
import { SoundEffectsContainer } from '../SoundEffectsContainer/SoundEffectsContainer';
import { SoundPropsContainer } from '../SoundPropsContainer/SoundPropsContainer';
import './App.css';
import { HashRouter, Link, Route } from 'react-router-dom';
import { GeneralSoundProps } from '../GeneralSoundProps/GeneralSoundProps';
import { GeneralContext } from '../../utils/GeneralContext';


const userSounds = [
    {
        id: 0,
        vol: 1,
        pan: 0,
        effects: {
        }
    },
];

export const App = () => {

    const [sound, setSounds] = React.useState(userSounds);
    const [volume, setVolume] = React.useState(1);
    const [pan, setPan] = React.useState(0);

    const [value, setValue] = React.useState(0);

    const handleVolumeChange = (volume: number) => {
        setVolume(volume);
    }
    const handlePanChange = (pan: number) => {
        setPan(pan);
    }
    const handleValueChange = (value: number) => {
        setValue(value);
    }

    return (

        <main className="app">
            <HashRouter basename={process.env.PUBLIC_URL}>
                    <SideNavBar />
                    <Route path="/sounds" render={() => <h1>Your sounds</h1>} />
                <GeneralContext.Provider value={{ volume, pan }}>
                    <Route path="/home" render={() => {
                        return <section className="app__content">
                            <SoundContainer>
                            </SoundContainer>
                            <GeneralSoundProps volumeChange={handleVolumeChange} panChange={handlePanChange}
                            />
                            <article className="app__contentPanels">
                                <SoundPropsContainer />
                                <SoundEffectsContainer valueChange={handleValueChange}/>
                            </article>
                        </section>
                    }} />
                </GeneralContext.Provider>
            </HashRouter>
        </main>
    );
}