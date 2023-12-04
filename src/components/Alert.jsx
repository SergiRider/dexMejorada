import React from 'react'

const Alert = ({error}) => {
    const aux_color='text-'+error.color+'-emphasis bg-'+error.color+'-subtle'
  return (
    <>
    <div className='cuadroError'>{error ? (<div className={aux_color}>{error.msg}</div>): null}</div>
    </>
  )
}

export default Alert