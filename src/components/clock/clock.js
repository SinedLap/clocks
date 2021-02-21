import React from 'react'



export default function Clock ({ timeZone }) {

  const time = new Date(new Date().toLocaleString("en-US", {timeZone}));
  const hour = time.getHours()
  const minutes = time.getMinutes()
  return (
    <div>
      <p>{`${hour} : ${minutes}`}</p>
    </div>
  )
}