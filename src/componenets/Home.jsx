import React from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Reducer'


const Home = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.counter.value)


  return (

    <div>
        <p style={{textAlign:"center",fontSize:'30px'}}>Redux example</p>
        <p style={{textAlign:"center",fontSize:"50px",marginBottom:"200px"}}>{count}</p>

        <div style={{display:"flex",gap:'200px',justifyContent:"center"}}>

            <button onClick={()=> dispatch(increment())} style={{width:"200px",height:"50px",color:"white",backgroundColor:"green"}}>+</button>
            <button onClick={()=> dispatch(decrement())} style={{width:"200px",height:"50px",color:"white",backgroundColor:"red"}}>-</button>


        </div>
    </div>
  )

}

export default Home