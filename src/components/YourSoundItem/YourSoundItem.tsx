import React, { useContext } from 'react';
import { GeneralContext } from '../../utils/GeneralContext';
import { getImageSrc } from '../../utils/getImageSrc';

interface YourSoundItemProps {
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


export const YourSoundItem: React.FC<YourSoundItemProps> = ({ name, id, /* app, vol, pan, feedback, time, mix, gain */ }) => {

	const { onSoundItemClick } = useContext(GeneralContext);
	const { onSoundItemStop } = useContext(GeneralContext);
	const handleClick = () => {
		onSoundItemClick(id);
	}
	const handleStop = () => {
		onSoundItemStop(id);
	}

	return (
		<div className="yourSoundItem">
			<h3 className="yourSoundItem__name">{name}</h3>
            <img src={getImageSrc('/mySound.svg')} alt=""/>
			<div className="yourSoundItem__buttons">
				<button className="yourSoundItem__button"  onClick={handleClick}>
					<img src={getImageSrc('/playIcon.png')} alt="" />
				</button>
				<button className="yourSoundItem__button" onClick={handleStop}>
					<img src={getImageSrc('/stop.png')} alt="" />
				</button>
			</div>

		</div>
	);
}