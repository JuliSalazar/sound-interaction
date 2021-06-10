
import React from 'react';

export interface SliderProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'background';
    min: number;
    max: number;
    onValueChange: (value: number) => void;
    value: number;
}

export const Slider: React.FC<SliderProps> = ({variant, children, label, min, max, value, onValueChange} ) => {
    const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onValueChange(parseFloat(event.target.value));
    }
    return <div className={`slider ${variant? 'slider--'+variant : ''}`}>
        <label>{label}</label>
        <input type="range" min={min} max={max} step={0.1} value={value} onChange={handleValueChange} />
        {children}
        <span>{value}</span>
    </div>
}