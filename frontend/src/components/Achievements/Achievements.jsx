import React, {useState, useEffect} from 'react';
import ACHIEVEMENT_DATA from './achievementData';
import AchievementElement from './AchievementElement';
import fetchAchievementsByUser from '../../api/fetchAchievementsByUser';

export default function Achievements() {
  const [achievementData, setAchievementData] = useState(null);

  useEffect(
    () => async function setAchievements() {
      const doneAchievements = await fetchAchievementsByUser();
      for (let achievement of ACHIEVEMENT_DATA) {
        if (doneAchievements.includes(achievement.index)) {
          achievement.done = true;
        }
      setAchievementData(ACHIEVEMENT_DATA);
      console.log(ACHIEVEMENT_DATA)
      }
    }, []
  );

  return (
    <div className='achievements'>
        <h3>ACHIEVEMENTS</h3>
        <hr />
        <div className='achievements-container'>
          {ACHIEVEMENT_DATA.map(achievement => <AchievementElement key={achievement.index} data={achievement} />)}
        </div>
    </div>
  )
}
