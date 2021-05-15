import React from 'react';
import { Slider, SliderProps } from './Slider';

type RangeSliderProps = SliderProps;

export const RangeSlider: React.FC<RangeSliderProps> = ({label, min, max, step, value, onValueChange}) => {


    return ( <Slider
    label={label}
    max={max}
    min={min}
    onValueChange={onValueChange}
    step={step}
    value={value}>
    </Slider>
    );
}