import { useEffect } from "react"

const usaCanvas = (draw)=>{
    const canvasRef = null
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        const render = ()=>{
            draw(context)
        }
        render()
    },[draw])
    return canvasRef
}
export default useCanvas