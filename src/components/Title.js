import React from 'react'

export const Title = ({title, subTitle}) => {
  return (
    <div>
      <h1 className='title'>{title} <span>{subTitle}</span></h1>
    </div>
  )
}

