import React from 'react';
import { Slider, SliderProps } from './Slider';

type RangeSliderProps = SliderProps;

export const RangeSlider: React.FC<RangeSliderProps> = ({label, min, max, value,variant, onValueChange}) => {


    return ( <Slider
    variant={variant}
    label={label}
    max={max}
    min={min}
    onValueChange={onValueChange}
    value={value}>
    </Slider>
    );
}