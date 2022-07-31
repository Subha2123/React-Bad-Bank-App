import ReactDOM  from 'react-dom';
import './App.css'
import {useState} from 'react'
import { useContext } from "react"
import userContext from "./context"
import wd from '../src/images/wd.png'



export default function Credit(){

//use context
let ctx=useContext(userContext)


var len = ctx.users.length;

//state for context
const[value,setValue]=useState()
const[amount,setAmount]=useState(ctx.users[len-1].balance)

const[status,setStatus]=useState()
   
// console.log(typeof(ctx.users.balance))
const withdraw=()=>{
      
        if(value<amount)setAmount(ctx.users[len-1].balance-(value))
        
        else{
        
        alert ("Your Account balance is insufficient")
        
        }
    }
    // console.log(amount) 
    ctx.users[len-1].balance=amount
        
    return(
    <>
    <img className='depimg' src={wd} alt="credit"></img>
    <form className='depform'>
    <h1 className='head2'>Start your withdraw</h1>
    <label>{status}{}
    < input type="number" placeholder='Enter Amount' onChange={(e)=>setValue(Number(e.target.value))}/>

    <input type="button" className="credit" value="credit" disabled={!value} onClick={withdraw}/>
    </label>
    <h1>Your Account balance is ${amount} </h1>
    </form>

</> 
)
}