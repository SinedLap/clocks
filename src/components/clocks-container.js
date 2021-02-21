import React, { useState } from 'react'
import Clock from './clock/clock'
import '../App.css'
import TimePicker from './timepicker'

export default function ClockContainer ({ timeZones }) {
  const [openTimePicker, setOpenTimePicker] = useState(false)
  const [userChoosenTime, setUserChoosenTime] = useState({
    hours: '08', 
    minutes: '00', 
    setUp: false
  })

  const openPicker = () => {
    setOpenTimePicker(true)
    setUserChoosenTime({...userChoosenTime, setUp: false})
  }

  const setUpUserTime = (name, value) => {
    setUserChoosenTime({...userChoosenTime, [name]: value})
    if (name ==='setUp') {
      setOpenTimePicker(false)
    }
  }

  return (
    <div>
      <div className='clocks-container'>
        {timeZones.map(zone => <Clock key={zone} timeZone={zone} />)}
      </div>
      <div className='time-controllers'>
        {openTimePicker 
          ? <TimePicker 
              hours={userChoosenTime.hours} 
              minutes={userChoosenTime.minutes} 
              setTime={setUpUserTime}
            /> 
          : null}
        <button onClick={openPicker}>Выберите время (Киев)</button>
        <button>Текущее время</button>
      </div>
    </div>
  )
}