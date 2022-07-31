
import "./App.css";
import ReactDOM  from 'react-dom';
import {useState} from 'react'
import { useContext } from "react"
import userContext from "./context"
import depimg from '../../create_react/src/images/dep.png'

export default function Deposit(){
//use context
let ctx=useContext(userContext)

var len = ctx.users.length;

//declare state for context
const[amount,setAmount]=useState(ctx.users[len-1].balance)
const[value,setValue]=useState(0)


//for condition
const[status,setStatus]=useState()
 
const deposit=()=>{

//add value in deposit   
if(value>0) setAmount((ctx.users[len-1].balance+value))
else {
alert("Enter a valid amount")
}
}
//assign amout in context
ctx.users[len-1].balance=amount


return(
<>

<img  className="depimg" src={depimg} alt="deposit"></img>
<form className="depform">
<h1 className="head2">Start your Deposit</h1>
<label>{status}{}
<input type="number" placeholder="Enter Amount" onChange={(e)=>setValue(Number(e.target.value))}/>
<input type="button"className="depo" value="deposit" disabled={!value} onClick={deposit} />
</label>
<h2 className="head3">Your Account balance is ${amount}</h2>
</form>


</>

)
}

  