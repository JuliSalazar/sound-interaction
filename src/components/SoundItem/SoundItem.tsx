import React, { useContext } from 'react';
import { GeneralContext } from '../../utils/GeneralContext';
import { getImageSrc } from '../../utils/getImageSrc';

interface SoundItemProps {
	id: number,
	name: string,
	soundUrl: string,
	/* app: any, */
	/* vol: number,
	pan: number,
	deleted: false,
	//Delay
	feedback: number,
	time: number,
	mix: number
	//Distortion
	gain: number; */
}


export const SoundItem: React.FC<SoundItemProps> = ({ name, id, /* app, vol, pan, feedback, time, mix, gain */ } ) => {

	const { onSoundItemClick } = useContext(GeneralContext);

	const handleClick = () => {
		onSoundItemClick(id);
	}
	const handleAdd = () => {
		onSoundItemClick(id);
	}

	return (
		<div className="soundItem">
			<h3>{name}</h3>
			<button onClick={handleClick}>P</button>
			<button onClick={handleAdd}>Add</button>
		</div>
	);
}




