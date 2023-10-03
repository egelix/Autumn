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
import MobileButtons from "./MobileButtons";

const GameApp = ({playerCharacter, isLoggedIn, setGameOverText, setGameContext}) => {
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
      const achievementsToUpdate = achievementsToCheck.filter(achievement => achievement.check(context))
                                                      .map(achievement => achievement.index);
      addDoneAchievementToUser(achievementsToUpdate);
      return achievementsToUpdate;    
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
      const render = async () => {
        if(game.state !== "finished") {
          draw(game);
          animationFrameId = window.requestAnimationFrame(render);
        }
        if(game.state === "finished") {
          window.cancelAnimationFrame(animationFrameId);
          if(isLoggedIn) {
            if(game.context.score > currentUser.highscore) {
              updateHighscore(game.context.score);
              game.context.isNewHighScore = true;
            }
              createRun(game.context.score, playerCharacter.name);
              const newAchievements = await updateAchievements(game.context);
              if(newAchievements.length > 0) {
                game.context.newAchievements = newAchievements;
              }
              setGameContext(game.context);
              console.log(game.context);
            }
            setGameOverText("You scored " + game.context.score + " Points");
          }
      }
      render()
      
      return () => {
      window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw])
    return (
      <div className="game-container">
        <canvas ref={canvasRef} tabIndex={"0"} />
        <MobileButtons />
      </div>
    )
}
export default GameApp;