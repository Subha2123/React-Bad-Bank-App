// import './App.css'
import { useFormik } from "formik";
// import { useState } from "react";
import userContext from "./context"
import { useContext } from "react"
import cdimg from '../../create_react/src/images/cd.png'
export default function Create(){

 

//use contex
let ctx = useContext(userContext);
var len = ctx.users.length;
// console.log(typeof(len))

  // const[user,setUser]=useState([])
    const formik = useFormik({
   
        initialValues: {
            sno:Number(len+1),
            name:"",
            email:"",
            password:"",
            balance:0
           },
      
          onSubmit: (values) => {
            alert("Your Account was Created")
            // console.log(values);
            var userDetails=values
            console.log(userDetails);
            
            ctx.users.push(userDetails)
            // console.log(ctx.users)
            
          },
      
          validate: (values) => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if(!values.password) errors.password="Required"
            return errors;
          }
         });
return(
    <>
       <img className="cdimg" src={cdimg} alt="cd"></img>
       <form className='form' onSubmit={formik.handleSubmit}>
       <label>First Name</label>
       <input id="name" name="name" type="text" placeholder="Enter your name"onChange={formik.handleChange} value={formik.values.name}/><br /><br />
       <label>Email Address</label>
       <input id="email" name="email" type="email"  placeholder="Enter your mail"onChange={formik.handleChange} value={formik.values.email}/><br /><br />
       {/* {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null} */}
       <label>Password</label>
      <input id="password" name="password" type="password"  placeholder="Enter your password"onChange={formik.handleChange} value={formik.values.password}/><br /><br />
      {/* {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null} */}
      
      <button className="cdbtn" type="submit">Create Account</button>
    </form>
  
 


    </>
)
}