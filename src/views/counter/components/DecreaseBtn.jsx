import React from 'react'
import useCounterStore from '../../../store/counterStore'
import CounterBtn from './CounterBtn'

const DecreaseBtn = () => {
  const decrement = useCounterStore((state) => state.decrement);
  console.log('decrease')
  return (
    <CounterBtn label="-" handle={decrement} />
  )
}

export default DecreaseBtn