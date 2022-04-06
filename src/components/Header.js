import ReactDOM from 'react-dom';

import navImg1 from '../images/Group77.png'
import navImg2 from '../images/Vector.png'
export default function Header(){
    return(
        <nav>
            <div className='container-fluid navbarTop'> <img src={navImg2} ></img></div>
           
           <div className='container navbarBtm'> <img src={navImg1} ></img></div>
           <div className='container'> 
               <h1 className='ml-5 navHeading'>Online Expiriences</h1>
               <h3 className='ml-5 navHeadingContent'>Join Unique interective activities led by one-of-a-kind hosts-All without leaving home</h3>
           </div>
          
            
        </nav>
    )
}