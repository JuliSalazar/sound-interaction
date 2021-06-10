import React from 'react';
import { SideNavBar } from '../../components/SideNavBar/SideNavBar';
import './App.css';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import { GeneralContext, SoundItemType } from '../../utils/GeneralContext';
import { getImageSrc } from '../../utils/getImageSrc';
import { SoundItem } from '../../components/SoundItem/SoundItem';
import { CircleEffectItem } from '../../components/Sliders/CircleSlider';
import { RangeSlider } from '../../components/Sliders/RangeSlider';
import { Checkbox } from '../../components/Sliders/Checkbox';
import { Visualization } from '../../components/Visualization/Visualization';
import { YourSoundItem } from '../../components/YourSoundItem/YourSoundItem';


const preSounds: SoundItemType[] = [
    {
        id: 0,
        name: 'Guitar',
        soundUrl: getImageSrc('sounds/guitar.wav'),
        vol: 1,
        pan: 0,
        rate: 0,
        //Delay
        feedback: 0.0,
        time: 0.0,
        mix: 0,
        //Distortion
        reverbTime: 0,
        decayRate: 0,
        dryWet: 0,
        distortion: false,
        //SoundFile
        sound: 0,
    },
    {
        id: 1,
        name: 'Drum',
        soundUrl: getImageSrc('sounds/drum.wav'),
        vol: 1,
        pan: 0,
        rate: 0,
        //Delay
        feedback: 0.0,
        time: 0,
        mix: 0,
        //Distortion
        reverbTime: 0,
        decayRate: 0,
        dryWet: 0,
        distortion: false,
        //SoundFile
        sound: 0,
    },
    {
        id: 3,
        name: 'Wolf Howl',
        soundUrl: getImageSrc('sounds/wolfHowl.wav'),
        vol: 1,
        pan: 0,
        rate: 0,
        //Delay
        feedback: 0,
        time: 0,
        mix: 0,
        //Distortion
        reverbTime: 0,
        decayRate: 0,
        dryWet: 0,
        distortion: false,
        //SoundFile
        sound: 0,
    },

];
declare var p5: any;
export const App = () => {
    const [preSoundsList, setPreSoundsList] = React.useState(preSounds);
    const [sound, setSound] = React.useState<SoundItemType>(preSoundsList[0]);
    const ref = React.useRef(null as HTMLDivElement | null);
    const variablesRef = React.useRef({
        playSound: (id: number) => { },
        addSound: (id: number) => { },
        changeVolume: (id: number, sound: SoundItemType) => { },
        getHandleChange: (key: keyof SoundItemType, id: number, sound: SoundItemType) => { },
        saveSound: (id: number) => { },
        stopSound: (id: number) => { },
    });


    const [usersSounds, setUsersSounds] = React.useState<SoundItemType[]>([]);
    const [noti, setNoti] = React.useState<boolean>(false);
   
    React.useEffect(() => {
        window.onload = function() {
            var context = new AudioContext();
            context.suspend();
          }

        const app = new p5((sketch: any) => {

            let selected: SoundItemType | null | undefined;
            var sounds: SoundItemType[] = [];
            var savedSounds: SoundItemType[] = [];
            

            sketch.preload = () => {
                sketch.getAudioContext().suspend();
                preSounds.forEach(({ name, soundUrl, id, vol, pan, rate, time, mix, reverbTime, decayRate, dryWet, distortion, feedback }) => {
                    sounds.push({
                        id,
                        name,
                        soundUrl,
                        vol,
                        pan,
                        rate,
                        //Delay
                        feedback,
                        time,
                        mix,
                        //Reverb
                        reverbTime,
                        decayRate,
                        dryWet,
                        distortion,

                        //SoundFile
                        sound: sketch.loadSound(soundUrl),
                    });
                });
            }
            let delay: any;
            let reverb: any;
            let distortion: any;
            sketch.setup = () => {
                delay = new p5.Delay();
                reverb = new p5.Reverb();
                distortion = new p5.Distortion();
            }

            variablesRef.current.playSound = (id: number) => {
                sketch.userStartAudio();
                const sound = sounds.find((s) => s.id === id);
                sound?.sound.play();
                const userSound = savedSounds.find((s) => s.id === id);
                userSound?.sound.play();
            }
            variablesRef.current.addSound = (id: number) => {
                const soundToAdd = sounds.find((s) => s.id === id);
                selected = soundToAdd;
            }
            variablesRef.current.stopSound = (id: number) => {
                const sound = sounds.find((s) => s.id === id);
                sound?.sound.stop();
                const userSound = savedSounds.find((s) => s.id === id);
                userSound?.sound.stop();
            }

            let mySound: any;
            variablesRef.current.getHandleChange = (key: keyof SoundItemType, id: number, soundItem: SoundItemType) => {
                if (selected) {
                    mySound = selected.sound;
                    switch (key) {
                        case 'vol':
                            mySound.setVolume(soundItem.vol);
                            break;
                        case 'pan':
                            mySound.pan(soundItem.pan);
                            break;
                        case 'rate':
                            mySound.rate(soundItem.rate);
                            break;
                        case 'feedback':
                        case 'time':
                        case 'mix':
                            delay.process(mySound, soundItem.time, soundItem.feedback, soundItem.mix);
                            break;
                        case 'reverbTime':
                        case 'decayRate':
                        case 'dryWet':
                            reverb.process(mySound, soundItem.reverbTime, soundItem.decayRate);
                            reverb.drywet(soundItem.dryWet);
                            break;
                        case 'distortion':
                            if (soundItem.distortion) {
                                mySound.setVolume(0.1);
                                distortion.connect();
                                distortion.process(mySound, 0.1);
                            } else {
                                mySound.setVolume(soundItem.vol);
                                distortion.disconnect();
                            }
                            break;

                    }
                    setSound((prev) => ({
                        ...prev,
                        sound: mySound
                    }));
                    variablesRef.current.saveSound = (id: number) => {
                        if (mySound && selected) {
                            savedSounds.push({
                                ...selected,
                                id: 100 + savedSounds.length,
                                name: "Your Sound",
                                sound: mySound
                            });
                            setUsersSounds(savedSounds);
                            setNoti(true);
                        }
                    }
                }
            }
            
        }, ref.current!);
    }, []);


    const handleSoundItemClick = (id: number) => {
        variablesRef.current.playSound(id);
    }
    const handleSoundItemAdd = (id: number) => {
        variablesRef.current.addSound(id);
        let mySound = preSoundsList.find((s) => s.id === id)
        if (mySound) setSound(mySound);
    }
   
    const handleSaveSound = (id: number) => {
        variablesRef.current.saveSound(id);
        /* var btn = document.querySelector('.saveButton');
        if (btn) btn.innerHTML = 'Saved!'; */
    }

    const handleSoundItemStop = (id: number) => {
        variablesRef.current.stopSound(id);
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
    const [effectTab, setEffectTab] = React.useState<'delay' | 'reverb' | 'distortion'>('delay');
    return (

        <main className="app">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" render={() => {
                    return <SideNavBar notification={noti} />
                }} />

                <GeneralContext.Provider value={{ predeterminateSounds: preSoundsList, onSoundItemClick: handleSoundItemClick, onSoundItemStop: handleSoundItemStop, onSoundItemAdd: handleSoundItemAdd }}>
                    <Route path="/home" render={() => {
                        return <section className="app__content">
                            <h1 className="app__title">INTERACTION</h1>
                            <button className={`saveButton${noti===true? ' saveButton--saved':''}`} onClick={() => handleSaveSound(sound.id)}>Save your sound!</button>
                            <div style={{ display: 'none' }} ref={ref}></div>

                            <section className="app__soundContainer">
                                <div className="app__preSounds">
                                    <p className="app__p"> Add a sound to start with "+" button</p>
                                    {preSoundsList.map(({ name, soundUrl, id }, index) => {
                                        return <SoundItem
                                            key={index}
                                            name={name}
                                            soundUrl={soundUrl}
                                            id={id}
                                        />;
                                    })}
                                </div>
                                <Visualization selectedSound={sound}/>
                            </section>
                            <button className={`btn ${generalPropsTab === 'volume' ? 'btn--selected' : ''}`} onClick={() => setGeneralPropsTab("volume")}>Volume</button>
                            <button className={`btn ${generalPropsTab === 'pan' ? 'btn--selected' : ''}`} onClick={() => setGeneralPropsTab("pan")}>Pan</button>
                            {generalPropsTab === 'volume' &&
                                <RangeSlider variant={'background'} label={''}
                                    max={1}
                                    min={0}
                                    onValueChange={getHandleChange('vol', sound.id)}
                                    value={sound.vol}></RangeSlider>
                            }
                            {generalPropsTab === 'pan' &&
                                <RangeSlider variant={'background'} label={''}
                                    max={1}
                                    min={-1}
                                    onValueChange={getHandleChange('pan', sound.id)}
                                    value={sound.pan}></RangeSlider>
                            }

                            <section className="app__contentPanels">
                                <section className="soundPropsContainer">
                                    <h3 className="h3--contentPanels">Sound Properties</h3>
                                    <article className="soundPropsContainer__fade"></article>
                                    <article className="soundPropsContainer__props">
                                        {/* <CircleEffectItem name="Pitch Adjust" value={sound.gain} decimal={true} /> */}
                                        <CircleEffectItem label="Playback Rate" value={sound.rate} decimal={true} min={0} max={2} onValueChange={getHandleChange('rate', sound.id)} />
                                        {/* <RangeSlider label={'Playback Rate'}
                                            max={2}
                                            min={0}
                                            onValueChange={getHandleChange('rate', sound.id)}
                                            value={sound.rate}></RangeSlider> */}
                                    </article>
                                </section>
                                <section className="soundEffectsContainer">
                                    <h3 className="h3--contentPanels">Effects</h3>
                                    <article className="soundEffectsContainer__effectsButtons">
                                        <button className={`btn ${effectTab === 'delay' ? 'btn--selected' : ''}`} onClick={() => setEffectTab("delay")}>Delay</button>
                                        <button className={`btn ${effectTab === 'reverb' ? 'btn--selected' : ''}`} onClick={() => setEffectTab("reverb")}>Reverb</button>
                                        <button className={`btn ${effectTab === 'distortion' ? 'btn--selected' : ''}`} onClick={() => setEffectTab("distortion")}>Distortion</button>
                                    </article>

                                    {effectTab === 'delay' && <article className="soundEffectsContainer__effectsProps">
                                        <RangeSlider label={'Delay Time'}
                                            max={1}
                                            min={0}
                                            onValueChange={getHandleChange('time', sound.id)}

                                            value={sound.time}></RangeSlider>
                                        <RangeSlider label={'Feedback'}
                                            max={0.9}
                                            min={0}
                                            onValueChange={getHandleChange('feedback', sound.id)}

                                            value={sound.feedback}></RangeSlider>
                                        <RangeSlider label={'Filter Frequency'}
                                            max={5000}
                                            min={100}
                                            onValueChange={getHandleChange('mix', sound.id)}

                                            value={sound.mix}></RangeSlider>
                                    </article>
                                    }

                                    {effectTab === 'reverb' && <article className="soundEffectsContainer__effectsProps">
                                        <RangeSlider label={'Reverb Time'}
                                            max={5}
                                            min={1}
                                            onValueChange={getHandleChange('reverbTime', sound.id)}

                                            value={sound.reverbTime}></RangeSlider>
                                        <RangeSlider label={'Decay Rate'}
                                            max={5}
                                            min={1}
                                            onValueChange={getHandleChange('decayRate', sound.id)}

                                            value={sound.decayRate}></RangeSlider>
                                        <RangeSlider label={'Dry/Wet'}
                                            max={1}
                                            min={0}
                                            onValueChange={getHandleChange('dryWet', sound.id)}

                                            value={sound.dryWet}></RangeSlider>
                                    </article>
                                    }
                                    {effectTab === 'distortion' && <article className="soundEffectsContainer__effectsProps">
                                        <Checkbox
                                            label="Distortion?"
                                            value={sound.distortion}
                                            onChange={getHandleChange('distortion', sound.id)}
                                        />

                                    </article>
                                    }
                                </section>
                            </section>
                        </section>
                    }} />
                </GeneralContext.Provider>
                <Route path="/profile" render={() => {
                    return <section className="app__content">
                        <h1 className="app__title">PROFILE</h1>
                    </section>
                }} />
                <GeneralContext.Provider value={{ predeterminateSounds: preSoundsList, onSoundItemClick: handleSoundItemClick, onSoundItemStop: handleSoundItemStop, onSoundItemAdd: handleSoundItemAdd }}>

                    <Route path="/sounds" render={() => {
                        return <section className="app__content">
                            <h1 className="app__title">YOUR SOUNDS</h1>
                            <div style={{ display: 'none' }} ref={ref}></div>
                            <section className="app__soundsContainer">
                                {usersSounds.map(({ name, soundUrl, id }, index) => {
                                    return <YourSoundItem
                                        key={index}
                                        name={name}
                                        soundUrl={soundUrl}
                                        id={id}
                                    />;
                                })}
                                {setNoti(false)}
                             
                            </section>
                            <Visualization selectedSound={sound}></Visualization>
                        </section>
                    }} />
                </GeneralContext.Provider>
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