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
        feedback: 0,
        time: 0,
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
        feedback: 0,
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
        changeVolume: (id: number, sound: SoundItemType) => { }
    });
    React.useEffect(() => {
        const app = new p5((sketch: any) => {
            /* const sounds: {
                id: number;
                sound: any;
            }[] = [];  */
            var sounds: SoundItemType[] = [];
            sketch.preload = () => {
                preSounds.forEach(({ name, soundUrl, id, vol, pan, time,mix, gain, feedback }) => {
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
            sketch.setup = () => {
            }
            variablesRef.current.playSound = (id: number) => {
                const sound = sounds.find((s) => s.id === id);
                sketch.userStartAudio();
                sound?.sound.play();
            }
            variablesRef.current.addSound = (id: number) => {
                const soundToAdd = sounds.find((s) => s.id === id);
        
            }
            variablesRef.current.changeVolume = (id: number, soundItem: SoundItemType) => {
                const sound = sounds.find((s) => s.id === id);
                sound?.sound.setVolume(soundItem.vol);
                sketch.userStartAudio();
                console.log("ejecutada");
            }
        }, ref.current!);
    }, []);

    
    const [sound, setSound] = React.useState<SoundItemType>(preSoundsList[0]);

    const handleSoundItemClick = (id: number) => {
        variablesRef.current.playSound(id);
    }
    const handleSoundItemAdd = (id: number) => {
        variablesRef.current.playSound(id);
    }

    const getHandleChange = (key: keyof SoundItemType, id:number) => {
        return (value: any) => {
            setSound((prev) => ({
                ...prev,
                [key]: value
            }));
        }
    }

    const [generalPropsTab, setGeneralPropsTab] = React.useState<'volume' | 'pan' | 'other'>('volume');
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
                            {generalPropsTab === 'volume' && <div className="app__generalSoundProps">
                                <RangeSlider label={'Volume'}
                                    max={1}
                                    min={0}
                                    onValueChange={getHandleChange('vol', sound.id)}
                                    step={0.1}
                                    value={sound.vol}></RangeSlider>
                            </div>

                            }

                            <section className="app__contentPanels">
                                <section className="soundPropsContainer">
                                    <article className="soundPropsContainer__fade"></article>
                                    <article className="soundPropsContainer__props">
                                        {/* <CircleEffectItem name="Playback Rate" value={} decimal={true} />
                                        <CircleEffectItem name="BPM" value={} />
                                        <CircleEffectItem name="Pitch Adjust" value={} decimal={true} />
                                        <CircleEffectItem name="Playback rate:" value={} /> */}
                                    </article>
                                </section>
                                <section className="soundEffectsContainer">

                                    <article className="soundEffectsContainer__effectsButtons">
                                        <Link to="/home/delay">Delay</Link>
                                        <Link to="/home/eq">EQ</Link>
                                        <Link to="/home/distortion">Distortion</Link>
                                    </article>
                                    <Route path="/home/delay" render={() =>
                                        <article className="soundEffectsContainer__effectsProps">


                                        </article>
                                    } />

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