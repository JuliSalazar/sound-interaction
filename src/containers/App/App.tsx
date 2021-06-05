import React from 'react';
import { SideNavBar } from '../../components/SideNavBar/SideNavBar';
import './App.css';
import { HashRouter, Link, Redirect, Route } from 'react-router-dom';
import { GeneralContext, SoundItemType } from '../../utils/GeneralContext';
import { getImageSrc } from '../../utils/getImageSrc';
import { SoundItem } from '../../components/SoundItem/SoundItem';
import { CircleEffectItem } from '../../components/Sliders/CircleSlider';
import { RangeSlider } from '../../components/Sliders/RangeSlider';


const preSounds: SoundItemType[] = [
    {
        id: 0,
        name: 'Guitar',
        soundUrl: getImageSrc('sounds/guitar.wav'),
        vol: 1,
        pan: 0,
        //Delay
        feedback: 0.0,
        time: 0.0,
        mix: 0,
        //Distortion
        gain: 0,
        sound: 0,
    },
    {
        id: 1,
        name: 'Drum',
        soundUrl: getImageSrc('sounds/drum.wav'),
        vol: 1,
        pan: 0,
        //Delay
        feedback: 0.0,
        time: 0,
        mix: 0,
        //Distortion
        gain: 0,
        sound: 0,
    },
    {
        id: 3,
        name: 'Wolf Howl',
        soundUrl: getImageSrc('sounds/wolfHowl.wav'),
        vol: 1,
        pan: 0,
        //Delay
        feedback: 0,
        time: 0,
        mix: 0,
        //Distortion
        gain: 0,
        sound: 0,
    },

];
declare var p5: any;
export const App = () => {

    const ref = React.useRef(null as HTMLDivElement | null);
    const [preSoundsList, setPreSoundsList] = React.useState(preSounds);
    const variablesRef = React.useRef({
        playSound: (id: number) => { },
        addSound: (id: number) => { },
        changeVolume: (id: number, sound: SoundItemType) => { },
        getHandleChange: (key: keyof SoundItemType, id: number, sound: SoundItemType) => { },
    });
    React.useEffect(() => {
        const app = new p5((sketch: any) => {

            let selected: SoundItemType | null | undefined;
            var sounds: SoundItemType[] = [];

            sketch.preload = () => {
                preSounds.forEach(({ name, soundUrl, id, vol, pan, time, mix, gain, feedback }) => {
                    sounds.push({
                        id,
                        name,
                        soundUrl,
                        vol,
                        pan,
                        //Delay
                        feedback,
                        time,
                        mix,
                        //Distortion
                        gain,
                        sound: sketch.loadSound(soundUrl),
                    });
                });

            }
            let delay: any;
            sketch.setup = () => {
                sketch.userStartAudio();
                delay = new p5.Delay();
            }
            variablesRef.current.playSound = (id: number) => {
                const sound = sounds.find((s) => s.id === id);
                sound?.sound.play();
            }
            variablesRef.current.addSound = (id: number) => {
                const soundToAdd = sounds.find((s) => s.id === id);
                selected = soundToAdd;
            }
            variablesRef.current.getHandleChange = (key: keyof SoundItemType, id: number, soundItem: SoundItemType) => {
                if (selected) {
                    let mySound = selected.sound;
                    switch (key) {
                        case 'vol':
                            mySound.setVolume(soundItem.vol);
                            break;
                        case 'pan':
                            mySound.pan(soundItem.pan);
                            break;
                        case 'feedback' :
                        case 'time' :
                            case 'mix' :
                            delay.process(mySound, soundItem.time, soundItem.feedback, soundItem.mix);
                            break;
                        case 'gain':
                            mySound.rate(soundItem.gain);
                            break;
                    }
                }
                console.log(soundItem);
            }
            /* variablesRef.current.changeVolume = (id: number, soundItem: SoundItemType) => {
                sketch.userStartAudio();
                if (selected) { selected.sound.setVolume(soundItem.vol) }

                console.log("ejecutada", soundItem.vol);
            } */
        }, ref.current!);
    }, []);


    const [sound, setSound] = React.useState<SoundItemType>(preSoundsList[0]);

    const handleSoundItemClick = (id: number) => {
        variablesRef.current.playSound(id);
    }
    const handleSoundItemAdd = (id: number) => {
        variablesRef.current.addSound(id);
    }

    const getHandleChange = (key: keyof SoundItemType, id: number) => {
        return (value: any) => {
            setSound((prev) => ({
                ...prev,
                [key]: value
            }));
            variablesRef.current.getHandleChange(key, id, ({
                ...sound,
                [key]: value
            }));
        }
    }

    const [generalPropsTab, setGeneralPropsTab] = React.useState<'volume' | 'pan'>('volume');
    const [effectTab, setEffectTab] = React.useState<'delay' | 'reverb'>('delay');
    return (

        <main className="app">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" render={() => {
                    return <SideNavBar />
                }} />

                <GeneralContext.Provider value={{ predeterminateSounds: preSoundsList, onSoundItemClick: handleSoundItemClick, onSoundItemAdd: handleSoundItemAdd }}>
                    <Route path="/home" render={() => {
                        return <section className="app__content">
                            <h1 className="app__title">INTERACTION</h1>
                            <button onClick={() => setGeneralPropsTab("pan")}>Save your sound!</button>
                            <div style={{ display: 'none' }} ref={ref}></div>

                            <section className="app__soundContainer">
                                {preSoundsList.map(({ name, soundUrl, id }, index) => {

                                    return <SoundItem
                                        key={index}
                                        name={name}
                                        soundUrl={soundUrl}
                                        id={id}
                                    />;
                                })}
                            </section>
                            <button onClick={() => setGeneralPropsTab("volume")}>Volume</button>
                            <button onClick={() => setGeneralPropsTab("pan")}>Pan</button>
                            {generalPropsTab === 'volume' &&
                                <RangeSlider label={'Volume'}
                                    max={1}
                                    min={0}
                                    onValueChange={getHandleChange('vol', sound.id)}

                                    value={sound.vol}></RangeSlider>
                            }
                            {generalPropsTab === 'pan' &&
                                <RangeSlider label={'Pan'}
                                    max={1}
                                    min={-1}
                                    onValueChange={getHandleChange('pan', sound.id)}

                                    value={sound.pan}></RangeSlider>
                            }

                            <section className="app__contentPanels">
                                <section className="soundPropsContainer">
                                    <article className="soundPropsContainer__fade"></article>
                                    {/* <CircleEffectItem name="Playback Rate" value={} decimal={true} />
                                        <CircleEffectItem name="BPM" value={} />
                                        <CircleEffectItem name="Pitch Adjust" value={} decimal={true} />
                                        <CircleEffectItem name="Playback rate:" value={} /> */}
                                    <article className="soundPropsContainer__props">
                                        {/* <CircleEffectItem name="Pitch Adjust" value={sound.gain} decimal={true} /> */}
                                        <RangeSlider label={'Playback Rate'}
                                            max={2}
                                            min={0}
                                            onValueChange={getHandleChange('gain', sound.id)}

                                            value={sound.gain}></RangeSlider>
                                    </article>
                                </section>
                                <section className="soundEffectsContainer">

                                    <article className="soundEffectsContainer__effectsButtons">
                                        {/* <Link to="/home/delay">Delay</Link>
                                        <Link to="/home/eq">EQ</Link>
                                        <Link to="/home/distortion">Distortion</Link> */}
                                        <button onClick={() => setEffectTab("delay")}>Delay</button>
                                        <button onClick={() => setEffectTab("reverb")}>Reverb</button>

                                    </article>

                                    {effectTab === 'delay' && <article className="soundEffectsContainer__effectsProps">
                                        <RangeSlider label={'Delay Time'}
                                            max={1}
                                            min={0}
                                            onValueChange={getHandleChange('time', sound.id)}

                                            value={sound.time}></RangeSlider>
                                        <RangeSlider label={'Feedback'}
                                            max={1.0}
                                            min={0.0}
                                            onValueChange={getHandleChange('feedback', sound.id)}

                                            value={sound.feedback}></RangeSlider>
                                        <RangeSlider label={'Filter Frequency'}
                                            max={1.0}
                                            min={0.0}
                                            onValueChange={getHandleChange('mix', sound.id)}

                                            value={sound.mix}></RangeSlider>
                                    </article>
                                    }

                                    <Route path="/home/distortion" render={() =>
                                        <article className="soundEffectsContainer__effectsProps">

                                        </article>
                                    } />
                                </section>
                                {/* <SoundEffectsContainer gainChange={handleGainChange}
                                    feedbackChange={handleFeedbackChange} timeChange={handleTimeChange} mixChange={handleMixChange} /> */}
                            </section>
                        </section>
                    }} />
                </GeneralContext.Provider>
                <Route path="/profile" render={() => {
                    return <section className="app__content">
                        <h1 className="app__title">PROFILE</h1>
                    </section>
                }} />
                <Route path="/sounds" render={() => {
                    return <section className="app__content">
                        <h1 className="app__title">YOUR SOUNDS</h1>
                    </section>
                }} />
                <Route path="/fav" render={() => {
                    return <section className="app__content">
                        <h1 className="app__title">FAVORITES</h1>
                    </section>
                }} />

                <Redirect from="/" to="/home" exact />
            </HashRouter>
        </main>
    );
}