import React from 'react';
import { CircleEffectItem } from '../../components/CircleEffectItem/CircleEffectItem';
import { Link, Route } from 'react-router-dom';
import { SliderLinearEffectItem } from '../../components/SliderLinearEffectItem/SliderLinearEffectItem';
interface SoundEffectsContainerProps {
    valueChange: (value: number) => void;
}

export const SoundEffectsContainer: React.FC<SoundEffectsContainerProps> = ({ valueChange }) => {

    const [rateValue, setRateValue] = React.useState(1);
    const [value, setValue] = React.useState(0);
    const interValueChange = (value: number) => {
        setValue(value);
        valueChange(value);
    }

    return (

        <section className="soundEffectsContainer">

            <article className="soundEffectsContainer__effectsButtons">
                <Link to="/home/delay">Delay</Link>
                <Link to="/home/eq">EQ</Link>
                <Link to="/home/distortion">Distortion</Link>
            </article>
            <Route path="/home/delay" render={() =>
                <article className="soundEffectsContainer__effectsProps">
                    <CircleEffectItem name="Playback Rate" value={rateValue} decimal={true} />
                    <CircleEffectItem name="BPM" value={rateValue} />
                    <CircleEffectItem name="Pitch Adjust" value={rateValue} decimal={true} />
                    <CircleEffectItem name="Playback rate:" value={rateValue} />
                </article>
            } />

            <Route path="/home/distortion" render={() =>
                <article className="soundEffectsContainer__effectsProps">
                    <SliderLinearEffectItem
                        name={"Gain:"}
                        min={0}
                        max={1}
                        step={0.1}
                        initialValue={0}
                        onValueChange={interValueChange}
                    />
                </article>
            } />
        </section>

    );
}
