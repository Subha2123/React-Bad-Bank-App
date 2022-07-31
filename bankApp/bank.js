
import background  from '../../create_react/src/images/bgbank.jpg'
import './App.css'
import home from '../src/images/homeln.png';
import edu from '../src/images/edln.jpg';
import agri from '../src/images/agriln.jpg';



export default function Bank(){

    const images=[home,edu,agri]
    const result = images.map(image => {
        return (
        <img key={image} src={`${image}`} alt="images"className="img-responsive" />
        )
     });
    const backimg={
        backgroundImage: `url(${background})`,
        height:'1100px'
    }
    return(
        <>
         <div className='bank' style={backimg}>
         <marquee><h1 className='head1'>WELCOME TO CITY UNION BANK</h1></marquee><br /><br /><br /><br />
         <h3 className='head4'>EXCLUSIVE LOANS FOR CITY UNION BANK CUSTOMERS</h3><br /><br />
         <div className='mapimg'>{result}</div>
         <footer>
         <p className='para1'>&copy;2019 all rights reserved</p>
        </footer>
        
        </div>
        </>
    )
}