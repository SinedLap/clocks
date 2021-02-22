import React from 'react'
import '../App.css'

export default function TimePicker ({ hours, minutes, setTime}) {
  const changeHours = (hours) => {
    if (hours < 24 && hours > -1) setTime('hours', hours < 10 ? `0${hours}` : hours) 
  }

  const changeMinutes = (minutes) => {
    if (minutes < 60 && minutes > -1) setTime('minutes', minutes < 10 ? `0${minutes}` : minutes) 
  }

  const changeSetUp = () => {
    setTime('setUp', true)
  }

  return (
    <div className='timepicker'>
      <div className='timepicker-time'>
        <input type='number' value={hours} onChange={e => changeHours(e.target.value)}/>
        <p>:</p>
        <input type='number' value={minutes} onChange={e => changeMinutes(e.target.value)}/>
      </div>
      <button type='button' onClick={changeSetUp}>Установить время</button>
    </div>
  )
}