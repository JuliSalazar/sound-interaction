import React from 'react';
import { CircleEffectItem } from '../../components/CircleEffectItem/CircleEffectItem';

interface SoundPropsContainerProps {

}

export const SoundPropsContainer: React.FC<SoundPropsContainerProps> = () => {

    const [rateValue, setRateValue] = React.useState(1);
    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setRateValue(parseInt(event.target.value));

    }

    return (

        <section className="soundPropsContainer">
            <article className="soundPropsContainer__fade"></article>
            <article className="soundPropsContainer__props">
                <CircleEffectItem name="Playback Rate" value={rateValue} decimal={true}/>
                <CircleEffectItem name="BPM" value={rateValue}/>
                <CircleEffectItem name="Pitch Adjust" value={rateValue} decimal={true}/>
                <CircleEffectItem name="Playback rate:" value={rateValue}/>
            </article>

        </section>
    );
}
