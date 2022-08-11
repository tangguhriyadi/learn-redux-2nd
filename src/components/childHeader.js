import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, isLogged, showAlert } from '../action'

const ChHeader = () => {
  const counter = useSelector(state => state.counter) //untuk ambil state dari store
  const logged = useSelector(state => state.isLogged)
  const dispatch = useDispatch() // dispatch action
  return (
    <>
    <div>this is {counter} & {logged}</div>
    <button onClick={() => {dispatch(increment())}}>+</button>
    <button onClick={() => {dispatch(decrement())}}>-</button>
    <button onClick={() => {dispatch(isLogged())}}>LOG</button>
    <button onClick={() => {dispatch(showAlert())}} > alert </button>

    </>
  )
}



export default ChHeader