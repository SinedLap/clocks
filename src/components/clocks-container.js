import React, { useEffect, useState } from 'react'
import Clock from './clock/clock'
import '../App.css'
import TimePicker from './timepicker'

export default function ClockContainer ({ timeZones, primaryTimeZone }) {
  const [openTimePicker, setOpenTimePicker] = useState(false)
  const [userChoosenTime, setUserChoosenTime] = useState({
    notDefaultValues: false,
    hours: '08', 
    minutes: '00', 
    setUp: false
  })
  const [times, setTimes] = useState({})

  useEffect(() => {
    if(!userChoosenTime.setUp && userChoosenTime.notDefaultValues)
      localStorage.setItem('time', JSON.stringify({
        ...userChoosenTime,
        hours: userChoosenTime.hours.toString(),
        minutes: userChoosenTime.minutes.toString(),
        setUp: false
      }))
  }, [userChoosenTime])  

  useEffect(() => {
    console.log('ОТРАБОТКА ЭФЕКТА 2')
    if(JSON.parse(localStorage.getItem('time'))) 
      setUserChoosenTime(JSON.parse(localStorage.getItem('time')))
  }, [])

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
    setUserChoosenTime({...userChoosenTime, [name]: value, notDefaultValues: true})
    if (name ==='setUp') {
      setOpenTimePicker(false)
    }
  }

  console.log(userChoosenTime)

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
                                    choosenTime={{
                                      hours: +(userChoosenTime.hours) + (times[zone].GMT - times[Object.keys(times)[primaryTimeZone]].GMT),
                                      minutes: +userChoosenTime.minutes}}
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
        <button 
          onClick={() => setUserChoosenTime({
                          hours: '08', 
                          minutes: '00', 
                          setUp: false
                        })
        }>
          Текущее время
        </button>
      </div>
    </div>
  )
}