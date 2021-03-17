import React from 'react';
import { CircleEffectItem } from '../../components/CircleEffectItem/CircleEffectItem';

interface SoundPropsContainerProps {
   
}

export const SoundPropsContainer: React.FC<SoundPropsContainerProps> = ()=> {

    const [ rateValue, setRateValue ] = React.useState(1);
   
    return (
        
        <section>
        <CircleEffectItem name="Playback Rate" value={rateValue}
       />
        <span>
            
        </span>
        </section>
        );
}
