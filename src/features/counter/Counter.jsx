import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { Button } from '@heroui/react'
import React from 'react'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button
        aria-label="Increment value"
        onPress={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onPress={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}

export default Counter;