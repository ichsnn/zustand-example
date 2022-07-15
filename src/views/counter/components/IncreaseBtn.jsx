import React from 'react'
import useCounterStore from '../../../store/counterStore'
import CounterBtn from './CounterBtn'

const IncreaseBtn = () => {
  const increment = useCounterStore((state) => state.increment);
  console.log('increase')
  return (
    <CounterBtn label="+" handle={increment} />
  )
}

export default IncreaseBtn