import React from 'react';
import Pizzicato from 'pizzicato';

interface SoundItemProps {
	//id: number;
	//frequency: number;
	volume: number;
	pan: number;
}


var sound = new Pizzicato.Sound();



const handlePlay= () => {
	sound.play();
}; 
const handleStop= () => {
	sound.stop();
}; 

var stereoPanner = new Pizzicato.Effects.StereoPanner({
	pan: 0
});
sound.addEffect(stereoPanner);

/* var delay = new Pizzicato.Effects.Delay({
    feedback: 0.6,
    time: 0.4,
    mix: 0.5
});

sound.addEffect(delay); */

export const SoundItem: React.FC<SoundItemProps> = ({ volume,pan}) => {
	//const [value, setValue] = React.useState(1);
	//setValue(volume);
	React.useEffect(() => {
		sound.volume = volume;
		stereoPanner.pan = pan;
	}, [volume,pan])
	

	//console.log(volume);
	return (
		<section className="soundItem">
			SONIDO?
			<button onClick={handlePlay}>PLAY</button>
			<button onClick={handleStop}>STOP</button>
		</section>
	);
}


