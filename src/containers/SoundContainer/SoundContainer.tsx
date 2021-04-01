import React from 'react';
import { useContext } from 'react';
import { SoundItem } from '../../components/SoundItem/SoundItem';
import { GeneralContext } from '../../utils/GeneralContext';
interface SoundContainerProps {
}

export const SoundContainer: React.FC<SoundContainerProps> = () => {

   const {volume} = useContext(GeneralContext);
   const {pan} = useContext(GeneralContext);
    return (

        <section className="SoundContainer">
            <SoundItem volume={volume} pan={pan}/>
        </section>
    );
}