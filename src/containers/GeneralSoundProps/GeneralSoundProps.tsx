import React from 'react';
import { SliderLinearEffectItem } from '../../components/SliderLinearEffectItem/SliderLinearEffectItem';

interface GeneralSoundPropsProps {
    volumeChange: (volume:number) => void;
    panChange: (pan:number) => void;
}

export const GeneralSoundProps: React.FC<GeneralSoundPropsProps> = ({volumeChange, panChange}) => {

    
    //setValue(value);
    //interValueChange(value);
    const interVolumeChange = (volume:number) =>{
        console.log(volume+" DESDE GENERAL");
        volumeChange(volume);
    } 
    const interPanChange = (pan:number) =>{
        panChange(pan);
    } 
   
    return (
        <div className="generalSoundProps">
            <SliderLinearEffectItem 
            onValueChange={interVolumeChange}
            />
            <SliderLinearEffectItem 
            onValueChange={interPanChange}
            />
        </div>
    );
}
