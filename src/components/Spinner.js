import React from 'react'     // React, { Component } <-----------usin Class based component
import loading from './loading.gif'
// export class Spinner extends Component {          <-----------usin Class based component
  const Spinner = ()=>{
  // render() {       <-----------usin Class based component
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="Loading" />
      </div>
    )
  // }          <-----------usin Class based component
}

export default Spinner
