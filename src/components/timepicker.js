import React from 'react'
import '../App.css'

export default function TimePicker ({ hours, minutes, setTime}) {
  const changeHours = (hours) => {
    console.log(hours)
    if (hours.length < 3)
    if (hours < 24 && hours > -1) setTime('hours', hours) 
  }

  const changeMinutes = (minutes) => {
    if (minutes.length < 3)
    if (minutes < 60 && minutes > -1) setTime('minutes', minutes) 
  }

  const changeSetUp = () => {
    setTime('setUp', true)
  }

  const onMissFocus = (type, value) => {
    const trimmerValue = value.split("0")
    value = trimmerValue < 10 ? `0${trimmerValue}` : trimmerValue
    setTime(type, value)
  }

  return (
    <div className='timepicker'>
      <div className='timepicker-time'>
        <input type='number' value={hours} onChange={e => changeHours(e.target.value)} onBlur={e => onMissFocus('hours', e.target.value)}/>
        <p>:</p>
        <input type='number' value={minutes} onChange={e => changeMinutes(e.target.value)} onBlur={e => onMissFocus('minutes', e.target.value)}/>
      </div>
      <button type='button' onClick={changeSetUp}>Установить время</button>
    </div>
  )
}