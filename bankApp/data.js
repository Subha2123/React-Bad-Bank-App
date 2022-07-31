import { useContext } from "react"
import userContext from "./context"
import './App.css'


export default function Data(){

    let ctx = useContext(userContext);
    // let strCtx=JSON.stringify(ctx.users)

    // const style={
    //     "borderWidth":"1px",
    //     'borderColor':"black", 
    //     'borderStyle':"solid"
    // }
    return(
    <>
    <table>
     <tbody>
        <tr className="trow">
        <td >S.No</td>
        <td>Name</td>
        <td>Email</td>
        <td>CurrentBalance</td>
       </tr>
    
     {ctx.users.map((data,i)=>
       <tr key={i}>
         <td>{data.sno}</td>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.balance}</td>
       </tr>
     )}
  </tbody>
  </table>
</> 
    )
}