import React from 'react';
import Movie from '../components/Movie/Movie';
import data from '../constants/data';
import './App.css';

function App(){
  return(
    <div className="app">
   {data.map(({Title,Year,Poster,imdbID})=>(
     <Movie
     key={imdbID} 
     Title={Title}
     Year={Year}
     Poster={Poster} />
   )
   
   )}
    </div>
  );}
//j'ai utilisé la méthode map de js, pour envoyé les donnée de mon tableau dans data.js
//j'ai utilisé imdbID dans key, pour effacer le warning dans console log, je peux utiliser aussi des index renvoyé par map()
export default App;
