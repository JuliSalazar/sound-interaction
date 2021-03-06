import React, { useContext } from 'react';
import { GeneralContext } from '../../utils/GeneralContext';
import { getImageSrc } from '../../utils/getImageSrc';

interface SoundItemProps {
	id: number,
	name: string,
	soundUrl: string,
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


export const SoundItem: React.FC<SoundItemProps> = ({ name, id, /* app, vol, pan, feedback, time, mix, gain */ }) => {

	const { onSoundItemClick } = useContext(GeneralContext);
	const { onSoundItemAdd } = useContext(GeneralContext);
	const { onSoundItemStop } = useContext(GeneralContext);
	const handleClick = () => {
		onSoundItemClick(id);
	}
	const handleStop = () => {
		onSoundItemStop(id);
	}
	const handleAdd = () => {
		onSoundItemAdd(id);
	}

	return (
		<div className="soundItem">
			<h3 className="soundItem__name">{name}</h3>
			<div className="soundItem__buttons">
				<button className="soundItem__button"  onClick={handleClick}>
					<img src={getImageSrc('/playIcon.png')} alt="" />
				</button>
				<button className="soundItem__button" onClick={handleStop}>
					<img src={getImageSrc('/stop.png')} alt="" />
				</button>
				<button className="soundItem__button" onClick={handleAdd}>
					<img src={getImageSrc('/addIcon.png')} alt=""/>
				</button>
			</div>

		</div>
	);
}




