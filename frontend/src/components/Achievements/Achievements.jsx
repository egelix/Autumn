import React from 'react';
import ACHIEVEMENT_DATA from './achievementData';
import AchievementElement from './AchievementElement';

export default function Achievements() {
  return (
    <div className='achievements-container'>
        {ACHIEVEMENT_DATA.map(achievement => <AchievementElement data={achievement} />)}
    </div>
  )
}
