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

  const [times, setTimes] = useState({})

  const zonesTimes = (location, day, hours) => {
    if(!times[location])
      setTimes({
        ...times,
        [location]: {
          day,
          hours,
          GMT: defineZonesGMT(day, hours)
        }
      })
  }

  const defineZonesGMT = (day, locationHours) => {
    const London = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/London"}))
    const LondonHours = London.getHours()

    return day == 0 
            ? `${((locationHours - LondonHours - 24))}`
            : `${((locationHours - LondonHours))}`
  }

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
        {!userChoosenTime.setUp 
          ? timeZones.map(zone => <Clock 
                                    key={zone} 
                                    timeZone={zone} 
                                    zonesTimes={zonesTimes}
                                  />
            )
          : timeZones.map(zone => <Clock 
                                    key={zone} 
                                    timeZone={zone} 
                                    zonesTimes={zonesTimes}
                                    choosenTime={{hours: userChoosenTime.hours, minutes: userChoosenTime.minutes}}
                                  />
            )
        }
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