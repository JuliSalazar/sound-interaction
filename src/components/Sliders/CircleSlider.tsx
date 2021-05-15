import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { ReactComponent as EmojiIcon } from '../../icons/star.svg';

interface CircleEffectItemProps {
    name: string;
    value: number;
    decimal?: boolean;
}
export const CircleEffectItem: React.FC<CircleEffectItemProps> = ({ name, value, decimal }) => {

    const handleChange = (value: any) => {
        console.log(`Changed value ${value}`);
        var temporalValue = value;
        if (decimal) { temporalValue /= 100; }
        setRateValue(temporalValue);
    };
    const [rateValue, setRateValue] = React.useState(1);
    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        var temporalValue = parseFloat(event.target.value);
        if (decimal) { temporalValue /= 100; }
        setRateValue(temporalValue);

    }
    //<CircleSlider value={rateValue} stepSize="0.1" circleWidth={10} progressWidth={10} knobRadius={5} gradientColorFrom={'#333DE6'} gradientColorTo={'#54C2F7'}onChange={handleChange}/>
    return (

        <div className="circleEffectItem">
            <h5>{name}</h5>
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
                onChange={handleChange}
            >
                <EmojiIcon x="9" y="9" width="18px" height="18px" />
            </CircularSlider>
            <span>{rateValue}</span>
        </div >
    );

}