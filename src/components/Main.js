import ReactDOM from 'react-dom'
import Card from './Card'

import data from '../data'

export default function Main(){
    const cardElement=data.map((n)=>{
        return <Card {...n} key={n.id} />
    })
    return(
          <div className='container main-container'>
           {cardElement}
           
           

          </div>
     )
}