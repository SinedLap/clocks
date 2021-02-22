import React from 'react'
import '../../App.css'

export default function Clock ({ timeZone, zonesTimes, choosenTime }) {
  const time = new Date(new Date().toLocaleString("en-US", {timeZone}));
  const hour = time.getHours()
  const minutes = time.getMinutes()
  const day = time.getDay()
  zonesTimes(timeZone, day, hour)
  return (
    <div className='clocks'>
      <p>{`${hour < 10 ? 0 : ''}${hour} : ${minutes < 10 ? 0 : ''}${minutes}`}</p>
    </div>
  )
}