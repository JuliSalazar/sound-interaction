import React from 'react';

interface SliderLinearEffectItemProps {
    name: string;
    min: number;
    max: number;
    step: number;
    onValueChange: (value:number) => void;
    initialValue: number;
}

export const SliderLinearEffectItem: React.FC<SliderLinearEffectItemProps> = ({name, min, max, step, initialValue, onValueChange}) => {

    const [value, setValue] = React.useState(initialValue);
    const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        var temporalValue = parseFloat(event.target.value);
        setValue(temporalValue);
        onValueChange(temporalValue);
    }

    return (
        <div className="sliderLinearEffectItem">
            <p>{name}</p>
            <input type="range" min={min} max={max} step={step} value={value} onChange={handleValueChange}/>
            <span>{value}</span>
        </div>
    );
}