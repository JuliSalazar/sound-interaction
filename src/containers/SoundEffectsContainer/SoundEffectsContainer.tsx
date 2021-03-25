import React from 'react';
import { CircleEffectItem } from '../../components/CircleEffectItem/CircleEffectItem';
import { BrowserRouter, Link, Route } from 'react-router-dom';
interface SoundEffectsContainerProps {

}

export const SoundEffectsContainer: React.FC<SoundEffectsContainerProps> = () => {

    const [rateValue, setRateValue] = React.useState(1);
    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setRateValue(parseInt(event.target.value));

    }

    return (
        <BrowserRouter>
            <section className="soundEffectsContainer">

                <article className="soundEffectsContainer__effectsButtons">
                    <Link to="/:effect">Delay</Link>
                    <Route path="/:effect" render={() => <h2>one</h2>} />
                </article>
                <article className="soundEffectsContainer__effectsProps">
                    <CircleEffectItem name="Playback Rate" value={rateValue} decimal={true} />
                    <CircleEffectItem name="BPM" value={rateValue} />
                    <CircleEffectItem name="Pitch Adjust" value={rateValue} decimal={true} />
                    <CircleEffectItem name="Playback rate:" value={rateValue} />
                </article>

            </section>
        </BrowserRouter>
    );
}
