import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {HashRouter , Link , Route,useLocation } from 'react-router-dom'
import Bank from './bank.js' 
import Create from "./account.js"
import Deposit from "./deposit.js"
import Credit from "./credit"
import Data from "./data"
import userContext from "./context"
import img from '../src/images/cub1.png'

export default function App(){

  const style={
  "text-decoration":"none",
  "color":"white",
  "margin":"10px",
  
}

  return(
    <>   
  
    <HashRouter>
    <img  src={img} alt="logo"/>
              
    <div className="route">
    
    <button><Link style={style} to="/bank">Bank</Link></button>
    <button><Link style={style} to="/account/">Create account</Link></button>
    <button><Link style={style} to="/deposit/">Deposit</Link></button>
    <button><Link style={style} to="/credit/">Credit</Link></button>
    <button><Link style={style} to="/data/">User Data </Link></button>
    
    </div>
    <userContext.Provider value={{users:[{sno:1,name:"Subhashini",email:"subhashinirbca@gmail.com",balance:100}]}} > 
    <Route path="/bank"  exact component={Bank} />
    <Route path="/account"  component={Create} />
    <Route path="/deposit" component={Deposit} />
    <Route path="/credit" component={Credit} />
    <Route path="/data" component={Data} />
    </userContext.Provider>
    </HashRouter>
   
 </>
  )
}

