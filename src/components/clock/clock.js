import React from 'react'
import '../../App.css'

export default function Clock ({ timeZone, choosenHours, choosenMinutes }) {
  const time = new Date(new Date().toLocaleString("en-US", {timeZone}));
  const hour = time.getHours()
  const minutes = time.getMinutes()

  return (
    <div className='clocks'>
      <p>{`${hour < 10 ? 0 : ''}${hour} : ${minutes < 10 ? 0 : ''}${minutes}`}</p>
    </div>
  )
}