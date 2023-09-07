import { useRef, useEffect } from "react";
import Game from "./classes/Game";

const GameApp = ({playerCharacter}) => {
    const canvasRef = useRef(null);
    /* useEffect(() => {
      console.log("hook fired!");
      console.log(canvasRef.current);
      const canvas = canvasRef.current;
      const game = new Game(canvas);
      console.log(game);
      game.run();
    }, []) */

    const draw = (game) => {
      game.update();
    }
    useEffect(() => {
    
      const canvas = canvasRef.current
      canvas.focus();
      let animationFrameId
      const game = new Game(canvas, playerCharacter);
      game.initialize();
      
      
      //Our draw came here
      const render = () => {
        draw(game);
        animationFrameId = window.requestAnimationFrame(render);
      }
      render()
      
      return () => {
      window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw])
    return (
        <canvas ref={canvasRef} tabIndex={"0"} />
    )
}
export default GameApp;