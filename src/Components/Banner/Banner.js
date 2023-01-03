import React,{useEffect,useState} from 'react'
import { imageUrl } from '../constants/Constant'

import axios from '../../axios'
import { API_KEY } from '../constants/Constant'
import './Banner.css'


function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[1])
      setMovie(response.data.results[0])
    })
   
  }, [])

 

 
  return (
    <div className='banner' 
     style={ {backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}  >
       
        <div className='content'>
            <h2 className='tittle'>{movie?movie.title:''}</h2>
            
            <div className='banner_button'>
                <button className='button'>play</button>
                <button className='button'>my List</button>
            </div>
            <div>
                <h3 className='description'>{movie?movie.overview:''}</h3>
            </div>
            
            
        </div>
    <div className="fade_bottom"></div> 
    
      
    </div>
  )
}

export default Banner
