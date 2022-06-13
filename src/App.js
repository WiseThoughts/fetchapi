import {useEffect, useState} from "react";
import './App.css';

function App() {

const [zooAnimal, setZooAnimal] = useState([]);
const [gameofthrones, setGOT] = useState([]);
const [lucifer, setLucifer] = useState([]);
const [ghibli, setGhibli] = useState([]);
const [error, setError] = useState(null);


useEffect(()=>{
  const fetchData = async ()=>{
    try {
      const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10");
      if (!response.ok){
        throw new Error(response.statusText)
      }
      const data = await response.json();
      setZooAnimal(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Couldn't fetch the data");}
  };
  fetchData();
},[])


useEffect(()=>{
  const fetchData = async ()=>{
    try {
      const response = await fetch("https://api.gameofthronesquotes.xyz/v1/random/10");
      if (!response.ok){
        throw new Error(response.statusText)
      }
      const data = await response.json();
      setGOT(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Couldn't fetch the data");}
  };
  fetchData();
},[])


useEffect(()=>{
  const fetchData = async ()=>{
    try {
      const response = await fetch("https://lucifer-quotes.vercel.app/api/quotes/10");
      if (!response.ok){
        throw new Error(response.statusText)
      }
      const data = await response.json();
      setLucifer(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Couldn't fetch the data");}
  };
  fetchData();
},[])


useEffect(()=>{
  const fetchData = async ()=>{
    try {
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      if (!response.ok){
        throw new Error(response.statusText)
      }
      const data = await response.json();
      setGhibli(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Couldn't fetch the data");}
  };
  fetchData();
},[])

//    useEffect(()=>{
//      console.log("component did mount")
//    }),[]; //will run when it's updated once becasue []
//    useEffect(()=>{
//     console.log("component did update")
//    }); //will update every time it's updated

  return (
    <div className="App">
      <h1>Fetch Api</h1>
      <div>
      <h2>Animals</h2>
      {error && <p>{error}</p>}
      <div>
      {zooAnimal.map((animal)=>(
        <div key={animal.id}>
        <h3>{animal.name}</h3>
        <img className="img" src={animal.image_link} alt="animal pic"></img>
        </div>
      ))}
      </div>
      </div>
      <div>
        <h2>Game of Thrones Quotes</h2>
      </div>
      {gameofthrones.map((got)=>(
        <div key={got.sentence}>
        <h3>{got.sentence}</h3>
        </div>
      ))}
      <div>
        <h2>Lucifer Quotes</h2>
      </div>
      {lucifer.map((luci)=>(
        <div key={luci.quote}>
        <h3>{luci.quote}</h3>
        <h4>{luci.author}</h4>
        </div>
      ))}
      <div>
        <h2>GHIBLI</h2>
      </div>
      {ghibli.map((gib)=>(
        <div key={gib.id}>
        <h2>{gib.title}</h2>
        <h4>{gib.original_title}</h4>
        <img className="img" src={gib.image} alt="pics"></img>
        <img className="img" src={gib.movie_banner} alt="pic banner"></img>
        <p className="p1">{gib.description}</p>
        <p>{gib.director}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
