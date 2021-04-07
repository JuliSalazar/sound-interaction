import React, { useContext } from 'react';
import { SliderLinearEffectItem } from '../../components/SliderLinearEffectItem/SliderLinearEffectItem';
import { GeneralContext } from '../../utils/GeneralContext';

interface GeneralSoundPropsProps {
    volumeChange: (volume:number) => void;
    panChange: (pan:number) => void;
}

export const GeneralSoundProps: React.FC<GeneralSoundPropsProps> = ({volumeChange, panChange}
    ) => {
        const {volume} = useContext(GeneralContext);
        const {pan} = useContext(GeneralContext);
    
    //setValue(value);
    //interValueChange(value);
    const interVolumeChange = (value:number) =>{
        volumeChange(value);
    } 
    const interPanChange = (value:number) =>{
        panChange(value);
    } 
   
    return (
        <div className="generalSoundProps">
            <SliderLinearEffectItem 
            name={""}
            min={0}
            max={1}
            step={0.1}
            initialValue={volume}
            onValueChange={interVolumeChange}
            />
            <SliderLinearEffectItem 
            name={""}
            min={-1}
            max={1}
            step={0.1}
            initialValue={pan}
            onValueChange={interPanChange}
            />
        </div>
    );
}
