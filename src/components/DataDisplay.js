import React from 'react'

export default function DataDisplay({ clickedItem }) {

  console.log(clickedItem)

  return (

    <div>
      {clickedItem.map((d,i)=> (
        <div key={i}>
          {d.h2 && <h2>{d.h2}</h2>}
          {d.h3 && <h3>{d.h3}</h3>}
          {d.p && <p>{d.p}</p>}
          {d.img && <img src={d.img} alt="no" />}
          {d.imgTitle && <p className='imgTitle'>{d.imgTitle}</p>}
        </div>
      ))}
    </div>
  )
}
