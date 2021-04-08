import React from 'react';
import Pizzicato from 'pizzicato';
import { getImageSrc } from '../../utils/getImageSrc';
import * as Tone from 'tone';
import p5 from 'p5';
//import 'p5/lib/addons/p5.sound.js';


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
var sound = new Pizzicato.Sound(soundFile);
//var mysound = new p5.SoundFile(soundFile);
//sound.connect(panner);
/* const soundFile = getImageSrc('sounds/guitar.wav');
var volume = new Tone.Volume(1).toDestination();
var panner = new Tone.Panner(0).toDestination();
var dist = new Tone.Distortion(0.8).toDestination();
var sound = new Tone.Player(soundFile).toDestination();
var feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
sound.connect(panner);
sound.connect(volume);
//sound.connect(dist);
sound.connect(feedbackDelay);
//sound.chain(panner,volume,dist, Tone.Destination); */

const handlePlay = () => {
	/* Tone.loaded().then(()=>{
		sound.start();
	}); */
	sound.play();
	
};
const handleStop = () => {
	/* Tone.loaded().then(()=>{
		sound.stop();
	}); */
	sound.stop();
};

//PIZZICATO
var stereoPanner = new Pizzicato.Effects.StereoPanner({
	pan: 0
});
sound.addEffect(stereoPanner);
 var delay = new Pizzicato.Effects.Delay();
sound.addEffect(delay); 
var distortion = new Pizzicato.Effects.Distortion();
sound.addEffect(distortion);

var analyser = Pizzicato.context.createAnalyser();

sound.connect(analyser);

//Visualization 


export const SoundItem: React.FC<SoundItemProps> = ({ vol, pan, feedback, time, mix, gain }) => {
	//const [value, setValue] = React.useState(1);
	//setValue(volume);
	const ref = React.useRef(null as HTMLDivElement|null);
	const variablesRef = React.useRef({
		vol : 1,
	});

	React.useEffect(() => {
		
		const app = new p5 ((sketch) => {
			sketch.setup = () => {
				sketch.createCanvas(200,200);
				//var mysound = new p5.SoundFile(soundFile);
				
				//mysound.play();
			}
			//let vol = vol;
			sketch.draw = () => {
				sketch.background('red');
				sketch.text(variablesRef.current.vol, 100,100);
			}
		}, ref.current!);
	}, []);
	React.useEffect(() => {
		
	
		/* panner.pan.value = pan;
		sound.volume.value = vol;
		dist.distortion = gain;
		feedbackDelay.delayTime.value = time;
		if(vol == -15){ sound.mute = true} */
		stereoPanner.pan = pan;
		sound.volume = vol;
		variablesRef.current.vol = vol;
		delay.feedback = feedback;
		delay.time = time;
		delay.mix = mix;
		distortion.gain = gain;
		
	}, [vol, pan, feedback, time, mix, gain])


	//console.log(volume);
	return (
		<section className="soundItem">
			<div ref={ref}></div>
			SONIDO?
			<button onClick={handlePlay}>PLAY</button>
			<button onClick={handleStop}>STOP</button>
		</section>
	);
}




