import React from 'react';
;
export default function AchievementElement({data}) {
  return (
    <div className='achievement-element'>
        <img src={data.done ? data.imgSrcDone : data.imgSrcEmpty} />
        <p className='achievement-title'>{data.title}</p>
    </div>
  )
}
