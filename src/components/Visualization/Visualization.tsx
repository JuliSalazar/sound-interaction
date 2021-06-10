
import React from 'react';
import { SoundItemType } from '../../utils/GeneralContext';

export interface VisualizationProps {
    selectedSound: SoundItemType;
}

declare var p5: any;
export const Visualization: React.FC<VisualizationProps> = ({selectedSound}) => {
    const variablesRef = React.useRef({
        mysound : selectedSound,
    });
    const refVisual = React.useRef(null as HTMLDivElement | null);
    React.useEffect(() => {
		variablesRef.current.mysound = selectedSound;
	}, [selectedSound])
    React.useEffect(() => {
        const app = new p5((sketch: any) => {
            let fft: any;
            let w: number;
            sketch.setup = () => {
                sketch.createCanvas(750,200);
                fft = new p5.FFT(0.9,64);
                w =  sketch.width/64;
            }
            sketch.draw = () => {
                sketch.background(sketch.color('#09021A'));
                let spectrum = fft.analyze();
                /* if(variablesRef.current.mysound.sound!= 0){
                    for (let t = 0.0; t < variablesRef.current.mysound.sound.duration(); t++) {
                        sketch.stroke(255);
                     sketch.line(variablesRef.current.mysound.sound.duration()/sketch.width,sketch.height, variablesRef.current.mysound.sound.duration()/sketch.width, 10 );
                     }
                 } */
                sketch.noStroke();
                sketch.fill(sketch.color('#5DC6FA'));
                for (let i = 0; i< spectrum.length; i++){
                  //let x = sketch.map(i, 0, spectrum.length, 0, sketch.windowWidth);
                  let y = sketch.map(spectrum[i], 0, 200, sketch.height, 0);
                  sketch.rect(i*w, y, w-2 , sketch.height - y);
                }
               // 
              
            }
            sketch.mousePressed = () => {
    
            }
        }, refVisual.current!);
    },[]);
    return <div className="visualization" ref={refVisual}>

    </div>;

}