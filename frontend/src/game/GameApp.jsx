import { useRef, useEffect, useContext } from "react";
import Game from "./classes/Game";
import UserContext from "../user/UserContext";
import updateHighscore from "../api/updateHighscore";
import createRun from "../api/createRun";

const GameApp = ({playerCharacter, isLoggedIn}) => {
    const canvasRef = useRef(null);
    const [currentUser, setCurrentUser] = useContext(UserContext);
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
        if(game.state !== "finished") {
          draw(game);
          animationFrameId = window.requestAnimationFrame(render);
        }
        if(game.state === "finished") {
          game.playerGUI.displayGameOver();
          window.cancelAnimationFrame(animationFrameId);
          console.log("score: " + game.player.score);
          console.log("userscore: " + currentUser.highscore);
          if(isLoggedIn) {
            if(game.player.score > currentUser.highscore) {
              updateHighscore(game.player.score);
            }
              createRun(game.player.score, playerCharacter.name);
          }
        }
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