import React from 'react'
import { useEffect,useState } from 'react'
import YouTube from 'react-youtube'
import {API_KEY, imageUrl} from '../constants/Constant'
import axios from 'axios'
import './Rowpost.css'

function Rowpost(props) {

  const [movies, setMovies] = useState([])
  const [url, setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)

    }).catch(err=>{
      alert("network eror")
    })

  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  const handleMovie = (id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        alert("no result found")
      }
  
      
    })


  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='poster'/>

          )}
           
        </div>
        {url && <YouTube opts={opts} videoId={url.key} />}

      
    </div>
  )
}

export default Rowpost
