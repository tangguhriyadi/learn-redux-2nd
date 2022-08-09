import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../action'

const ChHeader = () => {
  const counter = useSelector(state => state.counter) //untuk ambil state dari store
  const dispatch = useDispatch() // dispatch action
  return (
    <>
    <div>this is {counter}</div>
    <button onClick={() => {dispatch(increment())}}>+</button>
    <button onClick={() => {dispatch(decrement())}}>-</button>
    </>
  )
}



export default ChHeader