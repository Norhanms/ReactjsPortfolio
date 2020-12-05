import React, { useEffect, useRef } from 'react';
import useCanvas from './useCanvas';


/*

in the app.js


  const draw = (ctx, frameCount) => {

    ctx.fillStyle = '#D1EBF5';
    /*
        var grd = ctx.createLinearGradient(0, 0, 180, 0);
        grd.addColorStop(0, "#e4e");
        grd.addColorStop(1, "#09b");
    
    ctx.fillStyle = grd;
*/

/*
ctx.beginPath()
ctx.arc(0, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
ctx.fill()
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}
<Canvas draw={draw} />
*/



* /



const Canvas = (props) => {
    const { draw, ...rest } = props
    const canvasRef = useCanvas(draw)



    return (
        <canvas ref={canvasRef} {...rest}></canvas>
    );
}
export default Canvas