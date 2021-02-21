import React, { useState } from 'react'
import Clock from './clock/clock'
import '../App.css'

export default function ClockContainer ({ timeZones }) {
  const [choosenHours, setChoosenHours] = useState('')
  const [choosenMinutes, setChoosenMinutes] = useState('')
  const [openTimePicker, setOpenTimePicker] = useState(false)

  return (
    <div>
      <div className='clocks-container'>
        {timeZones.map(zone => <Clock key={zone} timeZone={zone} />)}
      </div>
      <div className='time-controllers'>
        {openTimePicker ? <p>timepicker</p> : null}
        <button onClick={() => setOpenTimePicker(!openTimePicker)}>Выберите время (Киев)</button>
        <button>Текущее время</button>
      </div>
    </div>
  )
}