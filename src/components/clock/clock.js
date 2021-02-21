import React from 'react'

export default function Clock ({ timeZone, choosenHours, choosenMinutes }) {
  const time = new Date(new Date().toLocaleString("en-US", {timeZone}));
  const hour = time.getHours()
  const minutes = time.getMinutes()

  return (
    <div>
      <p>{`${hour < 10 ? 0 : ''}${hour} : ${minutes < 10 ? 0 : ''}${minutes}`}</p>
    </div>
  )
}