import React, { Fragment } from 'react'
import '.././styles/DataDisplay.css'

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';

export default function DataDisplay({ clickedItem, clickedClassName }) {

 
  return (

    <div className='DataDisplay'>

      {clickedItem.map((d,i)=> (
        <div className={clickedClassName} key={i}>
          {d.h2 && <h2>{d.h2}</h2>}
          {d.h3 && <h3>{d.h3}</h3>}
          <div>
          {d.p && <p className='description'>{d.p}</p>}
            {d.webUrl && 
              <a href={d.webUrl} target='_blank' rel='noreferrer'>
                <IconButton aria-label="preview" >
                  <PreviewIcon />
                </IconButton>
              </a>
            }
            {d.gitUrl && 
              <a href={d.gitUrl} target='_blank' rel='noreferrer'>
                <IconButton aria-label="github" >
                  <GitHubIcon />
                </IconButton>
              </a>
            }
          </div>
          {d.img && <img src={d.img} alt="" />}
          {d.imgTitle && <p className='imgTitle'>{d.imgTitle}</p>}
        </div>
      ))}
      
    </div>

  )
}
