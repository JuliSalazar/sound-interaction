import React from 'react';
import { useContext } from 'react';
import { SoundItem } from '../../components/SoundItem/SoundItem';
import { GeneralContext } from '../../utils/GeneralContext';
interface SoundContainerProps {
}

export const SoundContainer: React.FC<SoundContainerProps> = () => {

   const {volume} = useContext(GeneralContext);
   const {pan} = useContext(GeneralContext);
   const {feedback} = useContext(GeneralContext);
   const {gain} = useContext(GeneralContext);
   const {mix} = useContext(GeneralContext);
   const {time} = useContext(GeneralContext);
    return (

        <section className="SoundContainer">
            <SoundItem 
            deleted={false}
            feedback={feedback}
            gain={gain}
            mix={mix}
            time={time}
            vol={volume} 
            pan={pan}/>
        </section>
    );
}