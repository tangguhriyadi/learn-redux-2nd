import React from 'react'
import { useSelector } from 'react-redux'

const ChHeader = () => {
  const counter = useSelector(state => state.counter)
  return (
    <>
    <div>this is {counter}</div>
    <button>+</button>
    <button>-</button>
    </>
  )
}



export default ChHeader