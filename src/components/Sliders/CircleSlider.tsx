import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { ReactComponent as EmojiIcon } from '../../icons/star.svg';

interface CircleEffectItemProps {
    label: string;
    value: number;
    min: number;
    max: number;
    onValueChange: (value: number) => void;
    decimal?: boolean;
}
export const CircleEffectItem: React.FC<CircleEffectItemProps> = ({ label, value, min, max, decimal,onValueChange }) => {

    const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (value:any) => {
        if (decimal) { 
            onValueChange(value/50);
        }
    }
    //<CircleSlider value={rateValue} stepSize="0.1" circleWidth={10} progressWidth={10} knobRadius={5} gradientColorFrom={'#333DE6'} gradientColorTo={'#54C2F7'}onChange={handleChange}/>
    return (

        <div className="circleEffectItem">
            <h5>{label}</h5>
            <CircularSlider
                width={100}
                progressLineCap="flat"
                min={0}
                max={100}
                hideLabelValue={true}
                labelColor="#FFFFFF"
                valueFontSize="2rem"
                verticalOffset="1rem"
                knobColor="#000000"
                progressColorFrom="#333DE6"
                progressColorTo="#54C2F7"
                progressSize={10}
                trackColor="#465383"
                trackSize={10}
                onChange={handleValueChange}>
                <EmojiIcon x="-3" y="-3" width="40px" height="40px" />
            </CircularSlider>
            <span>{value}</span>
        </div >
    );

}