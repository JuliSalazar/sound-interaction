import React from 'react';
import { CircleSlider } from 'react-circle-slider';

interface CircleEffectItemProps {
    name: string;
    value: number;
}
export const CircleEffectItem: React.FC<CircleEffectItemProps> = ({ name, value }) => {

    const handleChange = (value: any) => {
        console.log(`Changed value ${value}`);
    };

    return (
        
        <div className="circleEffectItem">
            <h5>{name}</h5>
            <CircleSlider value={value} onChange={handleChange}/>
            <span>{value}</span>
            </div>
    );

}