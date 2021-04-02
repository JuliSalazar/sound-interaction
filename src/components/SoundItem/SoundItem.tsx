import React from 'react';
import Pizzicato from 'pizzicato';
import { getImageSrc } from '../../utils/getImageSrc';

interface SoundItemProps {
//	id: number,
//	name: 'guitar',
//	url: './public/resources/sounds/guitar.wav',
	vol: number,
	pan: number,
	deleted: false,
	//Delay
	feedback: number,
    time: number,
    mix: number
	//Distortion
	gain: number;
}

const soundFile = getImageSrc('sounds/guitar.wav');
var sound = new Pizzicato.Sound({
	source: 'file',
	options: { path: soundFile}
}, function() {
    console.log('sound file loaded!');
});

const handlePlay = () => {
	sound.play();
};
const handleStop = () => {
	sound.stop();
};

var stereoPanner = new Pizzicato.Effects.StereoPanner({
	pan: 0
});
sound.addEffect(stereoPanner);
 var delay = new Pizzicato.Effects.Delay();
sound.addEffect(delay); 
var distortion = new Pizzicato.Effects.Distortion();
sound.addEffect(distortion);

export const SoundItem: React.FC<SoundItemProps> = ({ vol, pan, feedback, time, mix, gain }) => {
	//const [value, setValue] = React.useState(1);
	//setValue(volume);
	console.log("gain"+ gain);
	React.useEffect(() => {
		sound.volume = vol;
		stereoPanner.pan = pan;
		delay.feedback = feedback;
		delay.time = time;
		delay.mix = mix;
		distortion.gain = gain;
	}, [vol, pan, feedback, time, mix, gain])


	//console.log(volume);
	return (
		<section className="soundItem">
			SONIDO?
			<button onClick={handlePlay}>PLAY</button>
			<button onClick={handleStop}>STOP</button>
		</section>
	);
}


