import React from 'react'
import '.././styles/DataDisplay.css'

export default function DataDisplay({ clickedItem, clickedClassName }) {

  console.log(clickedClassName)

  return (

    <div className='DataDisplay'>
      {clickedItem.map((d,i)=> (
        <div className={clickedClassName} key={i}>
          {d.h2 && <h2>{d.h2}</h2>}
          {d.h3 && <h3>{d.h3}</h3>}
          {d.p && <p className='description'>{d.p}</p>}
          {d.img && <img src={d.img} alt="no" />}
          {d.imgTitle && <p className='imgTitle'>{d.imgTitle}</p>}
        </div>
      ))}
    </div>
  )
}
