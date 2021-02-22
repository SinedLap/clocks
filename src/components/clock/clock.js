import React from 'react'
import '../../App.css'

export default function Clock ({ timeZone, zonesTimes, choosenTime }) {
  const time = new Date(new Date().toLocaleString("en-US", {timeZone}));
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const day = time.getDay()
  zonesTimes(timeZone, day, hours)
  return (
    <div className='clocks'>
      {!choosenTime 
          ? <p>{`${hours < 10 ? 0 : ''}${hours} : ${minutes < 10 ? 0 : ''}${minutes}`}</p>
          : <p>
              {`${+choosenTime.hours < 10 ? 0 : ''}${+choosenTime.hours} : ${+choosenTime.minutes < 10 ? 0 : ''}${+choosenTime.minutes}`}
            </p>
      }
      
    </div>
  )
}