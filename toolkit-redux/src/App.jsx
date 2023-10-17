import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter/'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  
  const {counter} = useSelector( state => state.counter )
  const dispatch = useDispatch();

  return (
    <>
    <p> Counter is : {counter} </p>
      <div className="card">
        <button onClick={ ()=>dispatch(increment()) }>
          Increment
        </button>
        <button onClick={ ()=>dispatch(decrement()) }>
          Decrement
        </button>
        <button onClick={ ()=>dispatch(incrementBy(2)) }>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
