import { useEffect, useState } from 'react';
import './CSS/style.css';
import Details from './components/Details';

function App() {
  const [user, setUser] = useState([]);
  const [anime, setAnime] = useState(null);

  const getUsers = async () =>{
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    setUser(await response.json());
  }

  useEffect(() => {
    getUsers();
  }, []);

  const getDetail = (anime) =>{
    setAnime(anime);
  };

  return (   
    <>
      
      {anime ? <Details {...anime} />:<>
      <h2>Anime World</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">

        {
          user.map((curElem) => {
            return (
            <div className="col-10 col-md-4 mt-5" key={curElem.id}  >
            <div className="card">
              <img src={curElem.image} className="card-img-top imageSize" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{curElem.title} </h5>
                <button onClick={() => getDetail(curElem)} >Get Detail</button>
              </div>
            </div>
          </div>
            )
          })
        }
        </div>
      </div>
      </>
      }
    </>
  );
}
export default App;
