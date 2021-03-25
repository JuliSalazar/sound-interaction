import React from 'react';
import * as Tone from 'tone';
import Pizzicato from 'pizzicato';

interface SoundItemProps {
	//id: number;
	//frequency: number;
	//changeVolume: (volume:number) => void;
	volume: number;
	pan: number;
}

/* let wave = new Tone.Waveform();
const drawWave= (wave: any) => {
	let buffer = wave.getValue(0);
	for (let i = 0; i < buffer.length; i++) {

		
	}
	const osc = new Tone.Oscillator(440, "sine");
	osc.frequency.value = 220;
	osc.volume.value = -30;
	osc.toDestination();
	osc.connect(wave);

	osc.start();
	
}; */


var sound = new Pizzicato.Sound();



const handlePlay= () => {
	sound.play();
}; 
const handleStop= () => {
	sound.stop();
}; 



export const SoundItem: React.FC<SoundItemProps> = ({volume, pan}) => {
	//const [value, setValue] = React.useState(1);
	//setValue(volume);
	sound.volume = volume;
	var stereoPanner = new Pizzicato.Effects.StereoPanner({
		pan: pan
	});
	sound.addEffect(stereoPanner);
	//console.log(volume);
	return (
		<section className="SoundItem">
			SONIDO?
			<button onClick={handlePlay}>PLAY</button>
			<button onClick={handleStop}>STOP</button>
		</section>
	);
}


