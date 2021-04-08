import React from 'react';
import { CircleEffectItem } from '../../components/CircleEffectItem/CircleEffectItem';
import { Link, Route } from 'react-router-dom';
import { SliderLinearEffectItem } from '../../components/SliderLinearEffectItem/SliderLinearEffectItem';
interface SoundEffectsContainerProps {
    gainChange: (value: number) => void;
    feedbackChange: (value: number) => void;
    timeChange: (value: number) => void;
    mixChange: (value: number) => void;
}

export const SoundEffectsContainer: React.FC<SoundEffectsContainerProps> = ({ gainChange, feedbackChange, timeChange, mixChange }) => {

    const [gain, setGain] = React.useState(1);
    const [value, setValue] = React.useState(0);
    const interGainChange= (value: number) => {
        setGain(value);
        gainChange(value);
    }
    const interFeedbackChange = (value: number) => {
        setValue(value);
        feedbackChange(value);
    }
    const interTimeChange= (value: number) => {
        setValue(value);
        timeChange(value);
    }
    const interMixChange= (value: number) => {
        setValue(value);
        mixChange(value);
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
                    <SliderLinearEffectItem
                        name={"Feedback:"}
                        min={0}
                        max={1}
                        step={0.1}
                        initialValue={0}
                        onValueChange={interFeedbackChange}
                    />
                    <SliderLinearEffectItem
                        name={"Time:"}
                        min={0}
                        max={1}
                        step={0.1}
                        initialValue={0}
                        onValueChange={interTimeChange}
                    />
                    <SliderLinearEffectItem
                        name={"Mix:"}
                        min={0}
                        max={1}
                        step={0.1}
                        initialValue={0}
                        onValueChange={interMixChange}
                    />
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
                        onValueChange={interGainChange}
                    />
                </article>
            } />
        </section>

    );
}
