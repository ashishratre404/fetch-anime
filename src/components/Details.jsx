import React from 'react';
import './details.css';
function Details(props) {
  
  return (
    <>
    <h2>Information of Anime</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <div className="col-10 col-md-8  mx-auto" >
            <div className="card box">
                <img src= {props.movie_banner} className="card-img-top imageSize" alt="movie banner"/>
                <div className="card-body">
                <div className='details'>
                    <h5><span>Title:</span> {props.title}</h5>
                    <h5><span>Original Title:</span> {props.original_title}</h5>
                    <h5><span>Director:</span> {props.director}</h5>
                    <h5><span>Producer:</span> {props.producer}</h5>
                    <h5><span>Release Date:</span> {props.release_date}</h5>
                    <h5><span>Running time:</span> {props.running_time} min</h5>
                    <h5><span>Description:</span> <p> {props.description}</p></h5>
                </div>
                    
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details;