import React from 'react';
import { useContext } from 'react';
import { SoundItem } from '../../components/SoundItem/SoundItem';
import { GeneralContext } from '../../utils/GeneralContext';
interface SoundContainerProps {
    pan: number;
}

export const SoundContainer: React.FC<SoundContainerProps> = ({ pan}) => {

   const {volume} = useContext(GeneralContext);
    return (

        <section className="SoundContainer">
            <SoundItem volume={volume} pan={pan}/>
        </section>
    );
}