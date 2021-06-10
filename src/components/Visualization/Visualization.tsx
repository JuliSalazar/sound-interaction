
import React from 'react';

export interface VisualizationProps {
    
}

declare var p5: any;
export const Visualization: React.FC<VisualizationProps> = () => {
    const refVisual = React.useRef(null as HTMLDivElement | null);
    React.useEffect(() => {
        const app = new p5((sketch: any) => {
            let fft: any;
            let w: number;
            sketch.setup = () => {
                let cnv = sketch.createCanvas(750,200);
                fft = new p5.FFT(0.9,64);
                w =  sketch.width/64;
            }
            sketch.draw = () => {
                sketch.background(sketch.color('#09021A'));
                let spectrum = fft.analyze();
                sketch.noStroke();
                sketch.fill(sketch.color('#5DC6FA'));
                for (let i = 0; i< spectrum.length; i++){
                  //let x = sketch.map(i, 0, spectrum.length, 0, sketch.windowWidth);
                  let y = sketch.map(spectrum[i], 0, 200, sketch.height, 0);
                  sketch.rect(i*w, y, w-2 , sketch.height - y);
                }
            }
        }, refVisual.current!);
    },[]);
    return <div className="visualization" ref={refVisual}>

    </div>;

}