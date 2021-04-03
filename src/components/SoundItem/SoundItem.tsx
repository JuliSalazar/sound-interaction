import React from 'react';
import Pizzicato from 'pizzicato';
import { getImageSrc } from '../../utils/getImageSrc';
import * as Tone from 'tone';

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
//var sound = new Pizzicato
const soundFile = getImageSrc('sounds/guitar.wav');
var panner = new Tone.Panner(0).toDestination();
var volume = new Tone.Volume(1).toDestination();
var dist = new Tone.Distortion(0.8).toDestination();
var sound = new Tone.Player(soundFile).toDestination();
var feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
sound.connect(panner);
sound.connect(volume);
//sound.connect(dist);
sound.connect(feedbackDelay);
//sound.chain(panner,volume,dist, Tone.Destination);

const handlePlay = () => {
	Tone.loaded().then(()=>{
		sound.start();
	});
};
const handleStop = () => {
	Tone.loaded().then(()=>{
		sound.stop();
	});
};

/* var stereoPanner = new Pizzicato.Effects.StereoPanner({
	pan: 0
});
sound.addEffect(stereoPanner);
 var delay = new Pizzicato.Effects.Delay();
sound.addEffect(delay); 
var distortion = new Pizzicato.Effects.Distortion();
sound.addEffect(distortion); */

export const SoundItem: React.FC<SoundItemProps> = ({ vol, pan, feedback, time, mix, gain }) => {
	//const [value, setValue] = React.useState(1);
	//setValue(volume);
	React.useEffect(() => {
		
	
		panner.pan.value = pan;
		sound.volume.value = vol;
		dist.distortion = gain;
		feedbackDelay.delayTime.value = time;
		if(vol == -15){ sound.mute = true}
		/* delay.feedback = feedback;
		delay.time = time;
		delay.mix = mix;
		distortion.gain = gain; */
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


