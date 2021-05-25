
import React from 'react';

export interface SliderProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'circle';
    min: number;
    max: number;
    step: number | string;
    onValueChange: (value: number) => void;
    value: number;
}

export const Slider: React.FC<SliderProps> = ({variant = 'primary', children, label, min, max, step, value, onValueChange} ) => {
    const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onValueChange(parseInt(event.target.value));
    }

    return <div className="slider">
        <label>{label}</label>
        <input type="range" min={min} max={max} step={step} value={value} onChange={handleValueChange} />
        {children}
        <span>{value}</span>
    </div>
}