import React from 'react';

interface SliderLinearEffectItemProps {
    pan?: boolean;
    onValueChange: (volume:number) => void;
}

export const SliderLinearEffectItem: React.FC<SliderLinearEffectItemProps> = ({ pan, onValueChange}) => {

    const [volumeValue, setVolumeValue] = React.useState(1);
    const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        var temporalValue = parseFloat(event.target.value);
       // if (decimal) { temporalValue /= 100; }
        setVolumeValue(temporalValue);
        onValueChange(temporalValue);
    }
   
    if(pan){}
    return (
        <div className="sliderLinearEffectItem">
            <input type="range" min="0" max="1" step="0.1" value={volumeValue} onChange={handleValueChange}/>
            <span>{volumeValue}</span>
        </div>
    );
}