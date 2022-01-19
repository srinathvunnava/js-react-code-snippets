import React from 'react'

function getTime() {
    let date = new Date()
    const day = date.getDate()
    const month = date.getMonth() +1
    const year = date.getFullYear()
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


    return (
        <div>
          <h3>{ `Date : ${day} : Month : ${month}: Year: ${year} `}</h3>
          <h3>{`The time is : ${time}`} </h3>
        </div>
    )
}

export default getTime
