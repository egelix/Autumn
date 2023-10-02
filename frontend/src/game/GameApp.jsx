import { useRef, useEffect, useContext } from "react";
import Game from "./classes/Game";
import UserContext from "../user/UserContext";
import updateHighscore from "../api/updateHighscore";
import createRun from "../api/createRun";
import runContext from "./classes/RunContext";
import ACHIEVEMENT_DATA from "../components/Achievements/achievementData";
import addDoneAchievementToUser from "../api/addDoneAchievementToUser";
import RunContext from "./classes/RunContext";
import fetchAchievementsByUser from "../api/fetchAchievementsByUser";

const GameApp = ({playerCharacter, isLoggedIn, setGameOverText}) => {
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

    const updateAchievements = async (context) => {
      const doneAchievements = await fetchAchievementsByUser();
      let achievementsToCheck;
      if (doneAchievements.length) {
        achievementsToCheck = ACHIEVEMENT_DATA.filter(ach => !doneAchievements.includes(ach.index))
      } else {
        achievementsToCheck = ACHIEVEMENT_DATA;
      }
      console.log(context)
      const achievementsToUpdate = achievementsToCheck.filter(achievement => achievement.check(context))
                                                      .map(achievement => achievement.index);
      addDoneAchievementToUser(achievementsToUpdate);
    };

    const draw = (game) => {
      game.update();
    };
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
          window.cancelAnimationFrame(animationFrameId);
          const context = new RunContext(game.player.score);
          console.log(context)
          if(isLoggedIn) {
            if(game.player.score > currentUser.highscore) {
              updateHighscore(game.player.score);
            }
              createRun(game.player.score, playerCharacter.name);
            }
            setGameOverText("You scored " + game.player.score + " Points");
            updateAchievements(context);
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