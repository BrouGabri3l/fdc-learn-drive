import { useEffect, useRef } from "react"

const useCanvas = (draw, options = {}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext(options.context || "2d")
        const handleResize=()=>{
            context.canvas.width = canvas.parentElement.offsetWidth
            context.canvas.height = canvas.parentElement.offsetHeight
        }
        handleResize()
        const render = () => {
            draw(context)
            window.requestAnimationFrame(render)
        }
        
        window.addEventListener('resize',()=>{
            handleResize()
            render()
        })
        render()

    }, [draw])
    return canvasRef
}



export default useCanvas

