import React, { useState } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
import tourData from '../../tourData'

function  TourList(){
    const [tours, setTours] = useState(tourData) 
     
    function removeTour(id){
     const x = tours.filter(tour => tour.id !==id)
     setTours(x)
    console.log(id)
    }
    
    return(
    <section className="tourlist">
        {tours.map(tour =>(
             <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
        ))}
    </section>
    )
   
}

export default TourList