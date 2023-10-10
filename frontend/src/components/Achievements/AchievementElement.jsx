import React from 'react';
import { useState } from 'react';


export default function AchievementElement({data, openAchievement, changeOpenAchievement}) {
  //const [showAchievementDetails, setShowAchievementDetails] = useState(false)

  const handleCloseAchievementClick = () => {
    changeOpenAchievement(false);
  }
  const handleOpenAchievementClick = () => {
    changeOpenAchievement(data.index);
  }

  return (
    openAchievement === data.index ? 
      <div className='achievement-open' onClick={handleCloseAchievementClick}>
        <img src={data.done ? data.imgSrcDone : data.imgSrcEmpty}/>
        <p>Achieved on: {data.date}</p>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    :
      <div className='achievement-closed' onClick={handleOpenAchievementClick}>
        <img src={data.done ? data.imgSrcDone : data.imgSrcEmpty} />
      </div>    
  )
}
