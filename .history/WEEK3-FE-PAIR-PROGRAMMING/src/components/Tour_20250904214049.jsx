import React from 'react'

const Tour = ({ image }, { date }, { title }, { info }, { location }, { duration }, { cost }) => {
  return (
    <article className="tour">
      <span className='tour-image'>
        <i> className='{image}'</i>
      </span>
      <div className='tour-info'>
        <h4 className='tour-date'>{date}</h4>
        <h4 className='tour-title'>{title}</h4>
        <p className='tour-text'>{info}</p>
        <h4 className='tour-location'>{location}</h4>
        <h4 className='tour-duration'>{duration}</h4>
        <h4 className='tour-cost'>{cost}</h4>

      </div>
    </article>
  )
}

export default Tour