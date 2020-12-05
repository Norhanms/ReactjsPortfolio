import { useEffect, useRef } from 'react';
const useCanvas = draw => {

    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.hight = `${window.innerHeight}px`;

        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return canvasRef
}

export default useCanvas