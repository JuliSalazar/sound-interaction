import React from 'react';
import { SoundItem } from '../../components/SoundItem/SoundItem';
interface SoundContainerProps {
    volume:number;
    pan: number;
}

export const SoundContainer: React.FC<SoundContainerProps> = ({volume, pan}) => {


    return (

        <section className="SoundContainer">
            <SoundItem volume={volume} pan={pan}/>
        </section>
    );
}